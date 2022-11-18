import Image from 'next/image';
import style from '../styles/Logo.module.css';
import logo from '../public/images/logo-white.png';

export const Logo = ({ position }) => {
	const setStyle = () => {
		switch (position) {
			case 'header':
				return style.position_header;
			case 'main':
				return style.position_main;
			case 'menu':
				return style.position_menu;
			default:
				return;
		}
	};

	return (
		<div>
			<Image className={setStyle()} src={logo} priority='true' alt='Логотип издательства Доброе детство' />
		</div>
	);
};
