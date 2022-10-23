/**
 * Locale and messages declaration
 */
const locales = {
    en: {
        codes: ['en', 'en-US'],
        messages: {

        },
    },
};

/**
 * Exporting all the locales
 */
export default locales;

/**
 * Delcares the set of supported locales
 */
export const supportedLocales = Object.keys(locales);

/**
 * The default locale declaration
 */
export const defaultLocale = 'en';
