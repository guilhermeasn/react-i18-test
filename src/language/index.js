import i18next from "i18next";
import detector from 'i18next-browser-languagedetector';

import {
    initReactI18next,
    useTranslation
} from "react-i18next";

import ptBrTranslations from './pt-br.json';
import enUsTranslations from './en-us.json';

const languages = {
    'pt-BR': ptBrTranslations,
    'en-US': enUsTranslations
}

export const initialize = () => i18next.use(detector).use(initReactI18next).init({
    resources: languages,
    fallbackLng: 'pt-BR',
    defaultNS: 'default',
    debug: process.env.NODE_ENV !== 'production'
});

export function Translation({ namespace, message }) {

    const { t } = useTranslation(namespace);
    return t(message);

}
