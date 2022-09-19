import { React, Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { locales } from './locales';
import messages from './messages';

export function provider({ children, locale = locales.ENGLISH }) {
  return (
    <IntlProvider
      locale={locale}
      textComponent={Fragment}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
}
