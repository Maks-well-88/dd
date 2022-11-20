import Popup from './Popup';
import style from '../styles/PopupWithImage.module.css';

const PopupWithImage = ({ setPopupState, popupState }) => {
	return (
		<Popup setPopupState={setPopupState}>
			<div className={style.container}>
				<button
					className={style.closeButton}
					type='button'
					onClick={() => setPopupState({ isOpen: false, content: '' })}
				></button>
				<img className={style.image} src={popupState.content} alt='Изображение' />
			</div>
		</Popup>
	);
};

export default PopupWithImage;
