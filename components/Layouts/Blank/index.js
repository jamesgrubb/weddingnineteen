import GlobalNav from '../../GlobalNav';
import styles from '../Layout.module.scss';
const Blank = ({ children }, ...props) => {
	return (
		<>
			<GlobalNav />
			<main className={styles.main}>{children}</main>
			<footer className='footer'></footer>
		</>
	);
};

export default Blank;
