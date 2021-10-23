import styles from '/styles/accept.module.scss';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
const Accepted = () => {
	const [guestData, setGuestData] = useState('');
	const [found, setFound] = useState(true);
	const [formData, setFormData] = useState({});
	const router = useRouter();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		try {
			const result = await fetch('/api/accept', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const guest = await result.json();

			setGuestData(guest);
			reset();
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(async () => {
		if (guestData.length === 0) {
			setFound(!found);
			return;
		}
		router.push(`/guest/${guestData[0].id}`);
		try {
			const accept = await fetch('/api/accept', {
				method: 'PUT',
				body: JSON.stringify({
					id: guestData[0].id,
					fields: {
						Attending: 'Accepted',
					},
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			console.log(await accept.json());
		} catch (error) {
			console.error(error);
		}
	}, [guestData]);
	return (
		<div className={styles.content}>
			<div className={styles.content__text}>
				<div className={styles.content__title}>
					<h1>Planning to join us? Great!</h1>
				</div>
				<div className={styles.content__subtitle}>
					<h2>
						Please send your <strong>Name</strong> and{' '}
						<strong>Surname</strong> so we can check you off the
						list.{' '}
					</h2>
				</div>
			</div>
			<form
				autoComplete='on'
				onSubmit={handleSubmit(onSubmit)}
				className={styles.content__form}>
				<div className={styles.content__formItems}>
					<div className={styles.content__formItem}>
						<label className={styles.label} htmlFor='name'>
							Name
						</label>
						<input
							{...register('name', { required: true })}
							autoComplete='given-name'
							// required
							className={styles.input}
							type='text'
							// name='name'
							id='name'
						/>
						{errors.name && errors.name.type === 'required' && (
							<p style={{ color: 'red' }}>Name is required</p>
						)}
					</div>
					<div className={styles.content__formItem}>
						<label className={styles.label} htmlFor='surname'>
							Surname
						</label>
						<input
							{...register('surname', {
								required: 'Surname is required please',
							})}
							className={styles.input}
							// required
							autoComplete='family-name'
							type='text'
							// name='surname'
							id='surname'
						/>
						{errors.surname && (
							<p style={{ color: 'red' }}>Surname is required</p>
						)}
					</div>
				</div>
				<div className={styles.content__formBtn}>
					<button
						{...register('accept')}
						className='btn btn--primary'>
						ACCEPT
					</button>
					<button
						{...register('decline')}
						className='btn btn--primary'>
						DECLINE
					</button>
				</div>
			</form>
		</div>
	);
};

export default Accepted;
