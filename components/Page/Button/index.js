import { ReactElement } from 'react';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';
const Button = ({ children, ...props }) => {
	switch (props.as) {
		case 'link':
			return (
				<Link href={props.link} passHref>
					<p className={styles.link}>{children}</p>
				</Link>
			);
		case 'button':
			return (
				<button
					onClick={props.click}
					type='button'
					className={styles.btn}>
					{props.icon && (
						<FontAwesomeIcon spinning='true' icon={faSync} />
					)}
					{children}
				</button>
			);
		default:
			return (
				<button
					onClick={props.click}
					type='button'
					className={styles.btn}>
					{props.icon && <FontAwesomeIcon icon={faCoffee} />}
					{children}
				</button>
			);
	}
};

Button.defaultProps = {
	link: '/',
};

Button.propTypes = {
	as: PropTypes.string.isRequired,
	icon: PropTypes.string,
	// link: PropTypes.string.isRequired,
};

export default Button;
