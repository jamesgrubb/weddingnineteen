import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
const Button = ({ children }, props) => {
	switch (props.as) {
		case 'link':
			return (
				<Link
					href={props.link}
					onClick={props.click}
					className={styles.hello}>
					{props.icon && <FontAwesomeIcon icon={props.icon} />}
					{children}
				</Link>
			);
		case 'button':
			return (
				<button
					onClick={props.click}
					type='button'
					className={styles.btn}>
					{props.icon && <FontAwesomeIcon icon={props.icon} />}
					{children}
				</button>
			);
		default:
			return (
				<button
					onClick={props.click}
					type='button'
					className={styles.btn}>
					{props.icon && <FontAwesomeIcon icon={props.icon} />}
					{children}
				</button>
			);
	}
};

Button.propTypes = {
	as: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

export default Button;
