export const EMAIL_VALIDATOR = s => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s);
export const URL_VALIDATOR = s => /^(?:http(s)?:\/\/)?((localhost)|([\w.-]+(?:\.[\w.-]+)+))[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/.test(s);
export const PHONE_VALIDATOR = phone => true;
export const PHONE_MOBILE_VALIDATOR = phone => true;
