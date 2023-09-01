// Getting started https://lokalise.com/blog/vue-i18n/#Adjusting_the_views
// Naming conventions and organizing https://lokalise.com/blog/translation-keys-naming-and-organizing/

import { createI18n } from "vue-i18n";
import es from "@/i18n/es";
import en from "@/i18n/en";


const messages = {
    en,
    es
}
export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true, // acceder de manera global a la función de traducción $t
    messages
})
