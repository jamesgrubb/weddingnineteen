import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Modal from '../components/Modal';
import styles from '../styles/Home.module.scss';
import Accepted from '../components/Accepted';
import Section from '../components/Section';
import Cover from '../components/Cover';
import RSVP from '../components/RSVP';

export default function Home() {
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
			<main className='wrapper'>
				<Cover />
				<RSVP
					handleAccept={handleAccept}
					handleDecline={handleDecline}
				/>
				<Section
					headerBackground='yellow'
					bodyBackground='blue'
					title='Welcome'
					subtitle='text'>
					<p>
						Welcome, We&apos;re finally (hopefully!) getting married
						on Tuesday 28th December 2021 and are looking forward to
						celebrating with you.
					</p>
				</Section>
				<Section
					headerBackground='orange'
					bodyBackground='cornflowerblue'
					title='Venue'
					subtitle='text'>
					<p>
						There are a few rooms available at the venue, if you
						haven&apos;t contacted us already and if you would like
						to stay speak to Lucy and mention you are part of the
						wedding party.
					</p>
					<p>
						There is also a more affordable B&B a few miles away
						Church Farmhouse, The Street Herringswell, Kennett, IP28
						6ST, United Kingdom which you can find on{' '}
						<a href='https://www.booking.com/hotel/gb/church-farmhouse-b-amp-b.en-gb.html?aid=304142;label=gen173nr-1FCAEoggI46AdIM1gEaFCIAQGYAQm4AQfIAQzYAQHoAQH4AQuIAgGoAgO4Auq4uosGwAIB0gIkNzM4ZGY5YTAtYWIyOS00YWM5LTlmYmUtYzEyNDE5NzQzZjMx2AIG4AIB;sid=85396cdcf8b61d5ea73ca230a93cab48;atlas_src=sr_iw_title;dest_id=0;dist=0;group_adults=2;group_children=0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1;sig=v1_eYyvc0m&'>
							Booking.com
						</a>
					</p>
					<p>
						The nearest larger towns are Bury St Edmunds or
						Newmarket these are about 30mins drive a way.
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
				<Accepted />
			</Modal>
		</>
	);
}
