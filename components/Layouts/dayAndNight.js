import Modal from '../Modal';
import Cover from '../Cover';
import RSVP from '../RSVP';
import Accepted from '../Accepted';
import GlobalNav from '../GlobalNav';
import { useState } from 'react';
import styles from './Layout.module.scss';
const DayAndNight = ({ children }) => {
	const [showModal, setShowModal] = useState(false);
	const [accept, setAccept] = useState(null);
	const handleAccept = (e) => {
		e.preventDefault();
		setShowModal(true);
		setAccept(true);
	};
	const handleDecline = (e) => {
		e.preventDefault();
		setShowModal(true);
		setAccept(false);
	};
	return (
		<>
			<GlobalNav />
			<main className={styles.main}>
				<Cover />
				<RSVP
					handleAccept={handleAccept}
					handleDecline={handleDecline}
				/>
				{children}
			</main>
			<footer className='footer'></footer>
			<Modal onClose={() => setShowModal(false)} show={showModal}>
				<Accepted />
			</Modal>
		</>
	);
};

export default DayAndNight;
