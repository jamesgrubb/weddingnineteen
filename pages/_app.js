// import { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { ReactElement } from 'react';
library.add(fab, faCoffee);
import '../styles/globals.scss';
function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);
	return getLayout(<Component {...pageProps} />);
}

export default MyApp;
