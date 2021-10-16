import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi';
export default function Modal(props) {
	const [isBrowser, setIsBrowser] = useState(false);
	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const handleCloseClick = (e) => {
		e.preventDefault();
		props.onClose();
	};

	const modalContent = props.show ? (
		<div className={styles.modal}>
			<header className={styles.modal__header}>
				<button
					className={styles.modal__btn}
					onClick={handleCloseClick}>
					<FiX color='green' />
				</button>
			</header>
			{props.children}
		</div>
	) : null;

	if (isBrowser) {
		return ReactDOM.createPortal(
			modalContent,
			document.getElementById('modal-root')
		);
	} else {
		return null;
	}
}
