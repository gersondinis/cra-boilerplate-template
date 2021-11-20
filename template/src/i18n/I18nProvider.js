import './i18n';
import {Children, cloneElement, isValidElement} from 'react';
import {useStore} from '../store';

export const I18nProvider = ({children}) => {

  const {app: {language}} = useStore();

  return Children.map(children, child => isValidElement(child) ? cloneElement(child, {language}) : child);
}

export default I18nProvider;
