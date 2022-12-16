import {addLocale, setDefaultLang, useLocale as setLocale} from 'ttag';
import store from 'store';
import enLocale from 'date-fns/locale/en-US';
import ptLocale from 'date-fns/locale/pt-BR';


export const LOCALE_KEY = 'LANG';

export enum LOCALE {
  EN = 'en',
  PT = 'pt'
}

export const LOCALE_DETECTED = LOCALE.PT;

export const LOCALES_MAP = {
  en: 'en_US',
  pt: 'pt_PT',
  'en_US': 'en',
  'pt_PT': 'pt',
};

export const LOCALES_TRANSLATORS = {
  en: (s: string) => s,
  pt: (s: string) => s,
};

export const LOCALES_DATE_FNS_MAP = {
  en: enLocale,
  pt: ptLocale,
};

export const LOCALE_CANDIDATE = String(store.get(LOCALE_KEY) || LOCALE_DETECTED).substring(0, 2).toLowerCase() as LOCALE;

export const LOCALE_DEFAULT = Object.values(LOCALE).includes(LOCALE_CANDIDATE) ? LOCALE_CANDIDATE : LOCALE.EN;

export const translate = (str: string, locale = LOCALE_DEFAULT) => {
  if (LOCALES_TRANSLATORS.hasOwnProperty(locale.toLowerCase())) {
    return LOCALES_TRANSLATORS[locale](str);
  }

  return str;
};

export const loadLocales = (locales: LOCALE[] = []) => {
  const convertToTranslatableFn = (translationRaw: {translations: {'': {[key: string]: {msgstr: string[]}}}}) => {
    const {translations: {"": tObj = {}} = {}} = translationRaw || {};
    return (s: string): string => tObj.hasOwnProperty(s) && tObj[s].hasOwnProperty('msgstr') && tObj[s].msgstr.hasOwnProperty(0) && tObj[s].msgstr[0]
      ? tObj[s].msgstr[0]
      : s;
  };

  locales.forEach(locale => {
    const translation = require(`./translations/${locale}.po.json`);
    LOCALES_TRANSLATORS[locale] = convertToTranslatableFn(translation);
    addLocale(locale, translation);
  });
};

export const changeLocale = (locale: LOCALE) => {
  setLocale(locale);
  store.set(LOCALE_KEY, locale)
};

export const i18nInit = () => {
  loadLocales(Object.values(LOCALE));
  setDefaultLang(LOCALE_DEFAULT);
};

(() => {
  i18nInit();
  changeLocale(LOCALE_DEFAULT);
})();
