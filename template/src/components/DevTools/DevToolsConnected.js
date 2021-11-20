import React from 'react';
import DevTools from './DevTools';
import {navigate} from 'hookrouter';
import {useStore, actions} from '../../store';

const DevToolsConnected = () => {

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

export default DevToolsConnected;
