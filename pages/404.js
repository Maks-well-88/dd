import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import alas from '../public/images/alas.jpg';
import style from '../styles/404.module.css';

const NotFound = () => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					name='description'
					content='К сожалению, такой страницы нет на нашем сайте. Возможно, вы ввели неправильный адрес или страница была удалена с сервера.'
				/>
				<meta name='robots' content='noindex' />
				<title>Ошибка 404 | Страница не найдена</title>
			</Head>

			<div className={style.container}>
				<div className={style.imageContainer}>
					<Image src={alas} className={style.image} priority='true' alt='Ошибка 404' />
				</div>
				<h1 className={style.text}>
					А на{' '}
					<Link className={style.link} href='/'>
						главной странице
					</Link>{' '}
					у нас уже кое-что есть!
				</h1>
			</div>
		</>
	);
};

export default NotFound;
