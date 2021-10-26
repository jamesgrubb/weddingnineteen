import styles from './Time.module.scss';
const Event = ({ events }) => {
	return (
		<div className={styles.events}>
			{events.map((event) => {
				const { Time, Event, Emoji } = event.fields;
				return (
					<div key={event.id} className={styles.events__event}>
						<span className={styles.events__time}>{Time}</span>
						<div className={styles.events__name}>
							<span>{Event}</span>
							{Emoji ? (
								<span className={styles.events__emoji}>
									{Emoji}
								</span>
							) : (
								''
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Event;
