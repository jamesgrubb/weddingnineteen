import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { FiX } from 'react-icons/fi';
import { colorGreen } from '/styles/colors.module.scss';
const Modal = (props) => {
	const [isBrowser, setIsBrowser] = useState(false);
	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const handleCloseClick = (e) => {
		e.preventDefault();
		props.onClose();
	};

	const modalContent = props.show ? (
		<div className='modal'>
			<header className='modal__header'>
				<button
					style={{
						fontSize: '3rem',
						margin: 0,
						padding: '1rem',
						lineHeight: 1,
						cursor: 'pointer',
					}}
					className='modal__btn'
					onClick={handleCloseClick}>
					<FiX color={colorGreen} />
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
};

export default Modal;
