import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './es';
import ca from './ca';

// Detect browser language
const getBrowserLanguage = (): string => {
    const browserLang = navigator.language.split('-')[0];
    return ['es', 'ca'].includes(browserLang) ? browserLang : 'es';
};

// Get saved language or browser language
const savedLanguage = localStorage.getItem('language') || getBrowserLanguage();

i18n
    .use(initReactI18next)
    .init({
        resources: {
            es: { translation: es },
            ca: { translation: ca },
        },
        lng: savedLanguage,
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        },
    });

// Save language preference when it changes
i18n.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng);
    document.documentElement.lang = lng;
});

export default i18n;
