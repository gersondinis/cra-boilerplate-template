import {render} from '@testing-library/react';
import {Dummy} from 'components/common/Dummy/Dummy';


describe('Dummy', () => {
  it('renders children as expected', () => {
    expect(render(<Dummy/>).container).toMatchSnapshot();
    expect(render(<Dummy>{'children'}</Dummy>).container).toMatchSnapshot();
  });

  it('renders the provided children', () => {
    expect(render(<Dummy><span className='test'/></Dummy>).container.getElementsByClassName('test').length).toBe(1);
    expect(render(<Dummy/>).container.getElementsByClassName('test').length).toBe(0);
  });
});
