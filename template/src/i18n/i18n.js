import {addLocale, setDefaultLang, useLocale as setLocale} from 'ttag';
import store from 'store';
import enLocale from 'date-fns/locale/en-US';
import ptLocale from 'date-fns/locale/pt-BR';


export const LOCALE_KEY = 'LANG';

export const LOCALES = {
  EN: 'en',
  PT: 'pt',
}

export const LOCALE_DETECTED = LOCALES.PT;

export const LOCALES_MAP = {
  en: 'en_US',
  pt: 'pt_PT',
  'en_US': 'en',
  'pt_PT': 'pt',
};

export const LOCALES_TRANSLATORS = {
  en: s => s,
  pt: s => s,
};

export const LOCALES_DATE_FNS_MAP = {
  en: enLocale,
  pt: ptLocale,
};

export const LOCALE_CANDIDATE = String(window.LANG || store.get(LOCALE_KEY) || LOCALE_DETECTED).substring(0, 2).toLowerCase();

export const LOCALE_DEFAULT = Object.values(LOCALES).includes(LOCALE_CANDIDATE) ? LOCALE_CANDIDATE : LOCALES.EN;

export const translate = (str, locale = LOCALE_DEFAULT) => {
  if (LOCALES_TRANSLATORS.hasOwnProperty(locale.toLowerCase())) {
    return LOCALES_TRANSLATORS[locale](str);
  }

  return str;
};

export const loadLocales = (locales = []) => {
  const convertToTranslatableFn = translationRaw => {
    const {translations: {"": tObj = {}} = {}} = translationRaw || {};
    return s => tObj.hasOwnProperty(s) && tObj[s].hasOwnProperty('msgstr') && tObj[s].msgstr.hasOwnProperty(0) && tObj[s].msgstr[0]
      ? tObj[s].msgstr[0]
      : s;
  };

  locales.forEach(locale => {
    const translation = require(`./translations/${locale}.po.json`);
    LOCALES_TRANSLATORS[locale] = convertToTranslatableFn(translation);
    addLocale(locale, translation);
  });
};

export const changeLocale = locale => {
  setLocale(locale);
  store.set(LOCALE_KEY, locale)
};

export const i18nInit = () => {
  loadLocales(Object.values(LOCALES));
  setDefaultLang(LOCALE_DEFAULT);
};

(() => {
  i18nInit();
  changeLocale(LOCALE_DEFAULT);
})();
