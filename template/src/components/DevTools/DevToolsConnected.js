import React from 'react';
import DevTools from './DevTools';
import { useNavigate } from 'react-router-dom';
import {useStore, actions} from '../../store';

export const DevToolsConnected = () => {
  const navigate = useNavigate();
  const {app: {language, devTools: formData}} = useStore();
  const {app: {setLanguage, setAppDevToolsState}} = actions;

  return (
    <DevTools
      formData={formData}
      onChange={devTools => setAppDevToolsState(devTools)}
      currentLanguage={language}
      changeLanguageHandler={lang => setLanguage(lang)}
      navigateHandler={navigate}
      showLanguage={true}
      showTopBar
    />
  );
};

