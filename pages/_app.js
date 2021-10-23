import '../styles/globals.scss';
import DayAndNight from '../components/Layouts/dayAndNight';
function MyApp({ Component, pageProps }) {
	return (
		<DayAndNight>
			<Component {...pageProps} />;
		</DayAndNight>
	);
}

export default MyApp;
