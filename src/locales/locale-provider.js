import { IntlProvider } from 'react-intl';
import locales, { defaultLocale } from 'locales';

function LocaleProvider(props) {

    const { children } = props;

    return (
        <IntlProvider
            locale={defaultLocale}
            defaultLocale={defaultLocale}
            messages={locales[defaultLocale].messages}
        >
            {children}
        </IntlProvider>
    );
}

export default LocaleProvider;
