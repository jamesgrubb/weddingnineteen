import styles from './Time.module.scss';
const Event = ({ events }) => {
	return (
		<div className={styles.events}>
			{events.map((event) => {
				return (
					<div className={styles.events__event}>
						<span className={styles.events__time}>
							{event.fields.Time}
						</span>
						<div className={styles.events__name}>
							<span>{event.fields.Event}</span>
							{event.fields.Emoji ? (
								<span className={styles.events__emoji}>
									{event.fields.Emoji}
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
