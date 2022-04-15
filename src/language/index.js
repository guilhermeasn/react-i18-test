import i18next from "i18next";
import detector from 'i18next-browser-languagedetector';

import {
    initReactI18next,
    useTranslation
} from "react-i18next";

import ptBrTranslations from './pt-br.json';
import enUsTranslations from './en-us.json';
import esTranslations from './es.json';

const languages = {
    'pt-BR': ptBrTranslations,
    'en-US': enUsTranslations,
    'es': esTranslations
}

export const initialize = () => i18next.use(detector).use(initReactI18next).init({
    resources: languages,
    fallbackLng: 'pt-BR',
    defaultNS: 'default',
    debug: process.env.NODE_ENV !== 'production'
});

export const Translation = ({ namespace, message }) => {

    const { t } = useTranslation(namespace);
    return t(message);

}

export const changeLanguage = i18next.changeLanguage;
export const currentLanguage = () => i18next.language;
export const availableLanguages = Object.entries(languages).map(([ key, obj ]) => ({ code: key, description: obj.language }));
