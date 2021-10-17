import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Modal from '../components/Modal';
import styles from '../styles/Home.module.scss';
import Accepted from '../components/Accepted';
import Section from '../components/Section';
import Cover from '../components/Cover';
export default function Home() {
	const [showModal, setShowModal] = useState(false);
	const [accept, setAccept] = useState(null);
	const handleAccept = (e) => {
		setShowModal(true);
		setAccept(true);
		console.log(e.target);
	};
	const handleDecline = (e) => {
		setShowModal(true);
		setAccept(false);
		console.log(e.target);
	};

	return (
		<>
			<main className='wrapper'>
				<Cover />
				<Section>
					<section className={styles.section}></section>
					<button onClick={handleAccept}>Accept</button>
					<button onClick={handleDecline}>Decline</button>
				</Section>
				<Section
					headerBackground='yellow'
					bodyBackground='blue'
					title='Welcome'
					subtitle='text'>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Dolores, ab!
					</p>
				</Section>
				<Section
					headerBackground='orange'
					bodyBackground='cornflowerblue'
					title='Day'
					subtitle='text'>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Dolores, ab!
					</p>
				</Section>
				<Section
					headerBackground='orange'
					bodyBackground='cornflowerblue'
					title='Day'
					subtitle='text'>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Dolores, ab!
					</p>
				</Section>
				<Section
					headerBackground='orange'
					bodyBackground='cornflowerblue'
					title='Day'
					subtitle='text'>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Dolores, ab!
					</p>
				</Section>
			</main>
			<footer className={styles.footer}></footer>
			<Modal onClose={() => setShowModal(false)} show={showModal}>
				{accept && <Accepted />}
				{!accept && <p>You declined</p>}
			</Modal>
		</>
	);
}
