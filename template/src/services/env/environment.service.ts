export enum Environment {
  PRODUCTION = 'PROD',
  DEVELOPMENT = 'DEV',
}

export const ENV = process.env.REACT_APP_ENVIRONMENT as Environment;
export const APP_NAME = process.env.REACT_APP_NAME as string;
export const APP_VERSION = process.env.REACT_APP_VERSION as string;
export const PUBLIC_URL = process.env.PUBLIC_URL as string;
export const API_URL = process.env.REACT_APP_API_URL as string;
export const isProduction = process.env.REACT_APP_ENVIRONMENT === Environment.PRODUCTION;
export const isDevelopment = process.env.REACT_APP_ENVIRONMENT === Environment.DEVELOPMENT;
