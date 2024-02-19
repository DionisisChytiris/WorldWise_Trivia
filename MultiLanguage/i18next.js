import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'
import en from '../MultiLanguage/locales/en.json'
import es from '../MultiLanguage/locales/es.json'
import el from '../MultiLanguage/locales/el.json'

export const languageResources = {
    en: {translation: en},
    es:{translation: es},
    el:{translation: el},
}

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources: languageResources
})

export default i18next