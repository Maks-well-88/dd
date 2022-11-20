import React, { useEffect } from 'react';
import style from '../styles/Popup.module.css';

const Popup = ({ setPopupState, popupState, children }) => {
	useEffect(() => {
		document.addEventListener('keydown', handleCloseEsc);
		return () => document.removeEventListener('keydown', handleCloseEsc);
	}, [popupState]);

	const handleCloseEsc = e => e.key === 'Escape' && setPopupState({ isOpen: false, content: '' });

	return (
		<div
			className={style.popup}
			onClick={event => event.target === event.currentTarget && setPopupState({ isOpen: false, content: '' })}
		>
			{children}
		</div>
	);
};

export default Popup;
