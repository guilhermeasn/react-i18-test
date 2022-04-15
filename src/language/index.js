import i18next from 'i18next';
import detector from 'i18next-browser-languagedetector';

import {
    initReactI18next,
    useTranslation
} from 'react-i18next';

const languages =  (() => {
    let i = {};
    let r = require.context('./source/', false, /\.json$/);
    r.keys().map(el => { i[el.replace('./', '').replace('.json', '')] = r(el); });
    return i;
})();

export const initialize = () => i18next.use(detector).use(initReactI18next).init({
    resources: languages,
    lowerCaseLng: true,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV !== 'production'
});

export const Translation = ({ namespace, message }) => {

    const { t } = useTranslation(namespace);
    return t(message);

}

export const changeLanguage = i18next.changeLanguage;
export const currentLanguage = () => i18next.language;

export const availableLanguages = Object.entries(languages).map(([ key, obj ]) => ({ code: key, description: obj.language }));
