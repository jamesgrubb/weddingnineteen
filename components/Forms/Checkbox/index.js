import styles from './Checkbox.module.scss';
import PropTypes from 'prop-types';
const Checkbox = (props, ref) => {
	<>
		<div className={styles.group}>
			<label htmlFor={props.id} className={styles.labe}>
				{props.name}
			</label>
			<input type='checkbox' name={props.name} id={props.id} ref={ref} />
		</div>
	</>;
};

Checkbox.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

export default Checkbox;
