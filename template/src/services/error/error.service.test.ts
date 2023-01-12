import {AxiosError, AxiosResponse} from 'axios';
import {parseErrorMessage} from './error.service';
import { vi } from 'vitest';

const mockIsProductionValue = vi.fn();
vi.mock('services/env/environment.service', () => ({
  get isProduction() {
    return mockIsProductionValue();
  },
}));

describe('Error utils', () => {

  it('should parse predicted error messages', () => {
    expect(parseErrorMessage({response: {data: {error: 'products_not_found'}}})).toBe('products not found');
    expect(parseErrorMessage({response: {data: {error: 'products_already_purchased'}}})).toBe('products already purchased');
    expect(parseErrorMessage({response: {data: {error: 'insufficient_balance'}}})).toBe('insufficient balance');
    expect(parseErrorMessage({code: 'generic-001', message: 'error-msg'})).toBe('generic-001');
    expect(parseErrorMessage({response: {statusText: 'status-msg'}})).toBe('status-msg');
    expect(parseErrorMessage({errors: ['malformed jwt', 'random-error']})).toBe('malformed jwt,random-error');
    expect(parseErrorMessage({errors: 'malformed jwt'})).toBe('malformed jwt');
    expect(parseErrorMessage({message: 'error-msg'})).toBe('error-msg');
    expect(parseErrorMessage({code: 'generic-001', response: {statusText: 'status-msg'}, errors: ['error'], message: 'msg'})).toBe('generic-001');
    expect(parseErrorMessage({response: {statusText: 'status-msg'}, errors: ['error'], message: 'msg'})).toBe('status-msg' );
    expect(parseErrorMessage({errors: ['error'], message: 'msg'})).toBe('error');
    expect(parseErrorMessage({message: 'msg'})).toBe('msg');
    expect(parseErrorMessage('string-thrown')).toBe('string-thrown');
    expect(parseErrorMessage('', 'fallback-message')).toBe('fallback-message');
    expect(parseErrorMessage(null, 'fallback-message')).toBe('fallback-message');
    expect(parseErrorMessage(undefined, 'fallback-message')).toBe('fallback-message');
    expect(parseErrorMessage({unknownProperty: 'unknown'}, 'fallback-message')).toBe('fallback-message');
  });

  it('should parse axios errors', () => {
    expect(parseErrorMessage(new AxiosError('some message', '500', undefined, {}, {data: {code: 'generic-001'}} as AxiosResponse))).toBe('generic-001');
  });
});
