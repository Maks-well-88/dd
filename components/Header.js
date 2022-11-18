import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '../components/Logo';
import style from '../styles/Header.module.css';
import navigation from '../public/images/header-menu.svg';
import { headerNavigationData, headerSocialData } from '../utils/constants';

export const Header = ({ setMenuActive }) => {
	return (
		<header className={style.container}>
			<nav>
				<Image
					className={style.navIcon}
					src={navigation}
					width={30}
					height={30}
					alt='Навигация'
					onClick={() => setMenuActive(true)}
				/>
				<ul className={style.navigation}>
					{headerNavigationData.map((item, i) => (
						<li key={i} className={style.navigationItem}>
							<Link className={style.navigationLink} href={item.linkHref}>
								{item.linkName}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<Link href='/'>
				<Logo position={'header'} />
			</Link>
			<div className={style.contacts}>
				<span
					className={style.telephone}
					onClick={() => {
						window.location.href = 'tel:+74951506970';
					}}
				>
					+7 (495) 374-84-75
				</span>
				<ul className={style.social}>
					{headerSocialData.map((item, i) => (
						<li key={i} className={style.socialItem}>
							<a className={style.socialLink} href={item.socialHref} target='_blank' rel='noreferrer'>
								<Image src={item.socialIcon} width={24} height={24} alt={item.socialName} />
								{item.isYoutube && <span className={style.ourChannel}>Наш канал</span>}
							</a>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};
