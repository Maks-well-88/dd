import Link from 'next/link';
import Image from 'next/image';
import { Logo } from './Logo';
import style from '../styles/Menu.module.css';
import { menuNavigationData, menuSocialData } from '../utils/constants';

export const Menu = ({ menuActive, setMenuActive }) => {
	return (
		<div className={menuActive ? style.overlayActive : style.overlay}>
			<div className={menuActive ? style.containerActive : style.container}>
				<button className={style.closeButton} type='button' onClick={() => setMenuActive(false)}></button>
				<Logo position={'menu'} />
				<ul className={style.navigation}>
					{menuNavigationData.map((item, i) => (
						<li key={i} className={style.navigationItem} onClick={() => setMenuActive(false)}>
							<Link className={style.navigationLink} href={item.linkHref}>
								{item.linkName}
							</Link>
						</li>
					))}
				</ul>
				<p
					className={style.phone}
					onClick={() => {
						window.location.href = 'tel:+74951506970';
					}}
				>
					+7 (495) 374-84-75
				</p>
				<ul className={style.social}>
					{menuSocialData.map((item, i) => (
						<li key={i} className={style.socialItem}>
							<Link className={style.socialLink} href={item.socialHref} target='_blank' rel='noreferrer'>
								<Image src={item.socialIcon} width={24} height={24} alt={item.socialName} />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
