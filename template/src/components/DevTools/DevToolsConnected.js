import React from 'react';
import DevTools from './DevTools';
import {navigate} from 'hookrouter';
import {useActions, useAppState} from '../../store/store';

const DevToolsConnected = () => {

    const {app: {language, devTools: formData}} = useAppState();
    const {app: {setLanguage, setAppDevToolsState}} = useActions();

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