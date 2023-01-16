export enum Environment {
  PRODUCTION = 'PROD',
  DEVELOPMENT = 'DEV',
}

export const ENV = import.meta.env.VITE_ENVIRONMENT as Environment;
export const APP_NAME = import.meta.env.VITE_NAME as string;
export const APP_VERSION = import.meta.env.VITE_VERSION as string;
export const PUBLIC_URL = '';
export const API_URL = import.meta.env.VITE_API_URL as string;
export const MOCK = Boolean(import.meta.env.VITE_MOCK);
export const isProduction = import.meta.env.VITE_ENVIRONMENT === Environment.PRODUCTION;
export const isDevelopment = import.meta.env.VITE_ENVIRONMENT === Environment.DEVELOPMENT;
