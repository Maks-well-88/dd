import Image from 'next/image';
import Head from 'next/head';
import style from '../styles/Contacts.module.css';
import ogImage from '../public/images/og-image.png';
import Email from '../public/images/email-page-contacts.svg';
import Phone from '../public/images/phone-page-contacts.svg';
import { contactData } from '../utils/constants';

const Contacts = () => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='canonical' href='https://dd-beryl.vercel.app/contacts' />
				<meta
					name='description'
					content='Если вы детский писатель или художник и хотите стать частью нашей команды, обязательно свяжитесь с нами по телефону или email.'
				/>
				<meta
					name='keywords'
					content='ищу писателя, ищу художника, ищу дизайнера, сотрудничество с издательством'
				/>
				<meta property='og:title' content='Связаться с нами' />
				<meta
					property='og:description'
					content='Если вы детский писатель или художник и хотите стать частью нашей команды, обязательно свяжитесь с нами по телефону или email.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:image' content={ogImage} />
				<meta property='og:url' content='https://dobroedetstvo.ru/contacts' />
				<title>Контакты | «Доброе детство»</title>
			</Head>

			<div className={style.contactsPage}>
				<section className={style.contactsSection}>
					<h1 className={style.sectionTitle}>Контакты</h1>
					<div className={style.contactsWrapper}>
						<div className={style.phoneWrapper}>
							<p className={style.contactTitle}>Телефон для связи</p>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<div>
									<Image src={Phone} width={17} height={18} alt='Контактный телефон' />
								</div>
								<span className={style.contact}>7 (495) 374-84-75</span>
							</div>
						</div>
						<div className={style.emailWrapper}>
							<p className={style.contactTitle}>Почта для связи</p>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<Image src={Email} width={18} height={18} alt='Электронная почта' />
								<span className={style.contact}>kontakt@dobroedetstvo.ru</span>
							</div>
						</div>
					</div>
				</section>
				<section className={style.jobSection}>
					<h2 className={style.sectionTitle}>Сотрудничество</h2>
					<ul className={style.vacancyWrapper}>
						{contactData.map((item, index) => (
							<li key={index} className={style.vacancy}>
								<h3 className={style.vacancyHeading}>{item.appeal}</h3>
								<p className={style.vacancyText}>{item.vacancyText}</p>
								<button
									className={style.sendButton}
									onClick={() => (window.location.href = `${item.mailto}`)}
									type='button'
								>
									Откликнуться
								</button>
							</li>
						))}
					</ul>
				</section>
			</div>
		</>
	);
};

export default Contacts;
