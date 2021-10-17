import styles from '/styles/accept.module.scss';

const Accepted = () => {
	const handleFormSubmit = (e) => {
		console.log(e);
	};

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
				onSubmit={handleFormSubmit}
				className={styles.content__form}>
				<div className={styles.content__formItems}>
					<div className={styles.content__formItem}>
						<label className={styles.label} htmlFor='name'>
							Name
						</label>
						<input
							autoComplete='given-name'
							required
							className={styles.input}
							type='text'
							name='name'
							id='name'
						/>
					</div>
					<div className={styles.content__formItem}>
						<label className={styles.label} htmlFor='surname'>
							Surname
						</label>
						<input
							className={styles.input}
							required
							autoComplete='family-name'
							type='text'
							name='surname'
							id='surname'
						/>
					</div>
				</div>
				<div className={styles.content__formBtn}>
					<button className='btn btn--primary'>Send!</button>
				</div>
			</form>
		</div>
	);
};

export default Accepted;
