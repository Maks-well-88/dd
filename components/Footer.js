import Image from 'next/image';
import Phone from '../public/images/phone.svg';
import Email from '../public/images/email.svg';
import style from '../styles/Footer.module.css';
import { footerSocialData } from '../utils/constants';

export const Footer = () => {
	const date = new Date().getFullYear();

	return (
		<footer className={style.footer}>
			<div className={style.footerWrap}>
				<p className={style.copyright}>{date}&nbsp;&copy; &laquo;Доброе детство&raquo;. Все права защищены</p>
				<div className={style.contacts}>
					<div className={style.phone}>
						<Image src={Phone} width={17} height={17} alt='Телефон' />
						<span>7 (495) 374-84-75</span>
					</div>
					<div className={style.email}>
						<Image src={Email} width={17} height={17} alt='Электронная почта' />
						<span>kontakt@dobroedetstvo.ru</span>
					</div>
				</div>
				<ul className={style.socialItems}>
					{footerSocialData.map((item, index) => (
						<li key={index} className={style.socialItem}>
							<a href={item.socialHref} target='_blank' rel='noreferrer'>
								<Image src={item.socialIcon} width={26} height={26} alt={item.socialName} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};
