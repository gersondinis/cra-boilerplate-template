export enum Environment {
  PRODUCTION = 'PROD',
  DEVELOPMENT = 'DEV',
}

export const ENV = process.env.REACT_APP_ENVIRONMENT as Environment;
export const API_URL = process.env.REACT_APP_API_URL as string;
export const isProduction = process.env.REACT_APP_ENVIRONMENT === Environment.PRODUCTION;
export const isDevelopment = process.env.REACT_APP_ENVIRONMENT === Environment.DEVELOPMENT;
