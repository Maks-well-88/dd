import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../components/Logo';
import style from '../styles/Home.module.css';
import { peculiaritiesData } from '../utils/constants';
import { Book } from '../components/Book';

export const getServerSideProps = () => {
	return fetch('https://632054139f82827dcf2a1cca.mockapi.io/books')
		.then(res => {
			return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
		})
		.then(data => {
			if (!data) {
				return {
					notFound: true,
				};
			}
			return {
				props: { books: data },
			};
		})
		.catch(err => console.error(err));
};

const Home = ({ books }) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='canonical' href='https://dobroedetstvo.ru/' />
				<meta
					name='description'
					content='Проект для повышения осознанности общества в деле воспитания детей. Издаем развивающие детские книги, разбираем воспитательные посылы популярных медиа-продуктов.'
				/>
				<meta
					name='keywords'
					content='доброе детство, развивающие книги, воспитание детей, папин надзор, Константин Антипин'
				/>
				<meta property='og:title' content='Доброе детство' />
				<meta
					property='og:description'
					content='Проект для повышения осознанности общества в деле воспитания детей. Издаем развивающие детские книги, разбираем воспитательные посылы популярных медиа-продуктов, проводим вебинары и форумы по актуальным темам воспитания детей.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:image' content='../public/ogg.png' />
				<meta property='og:url' content='https://dobroedetstvo.ru/' />
				<title>Издательство «Доброе детство»</title>
			</Head>

			<main className={style.main}>
				<Logo position={'main'} />
				<h1 className={style.tagline}>
					Проект для повышения осознанности общества в&nbsp;деле воспитания детей
				</h1>
				<ul className={style.description}>
					{peculiaritiesData.map((item, index) => (
						<li key={index} className={style.descriptionItem}>
							<Image className={style.cloudImage} src={item.image} alt={item.alt} />
							<p className={style.descriptionText}>{item.text}</p>
						</li>
					))}
				</ul>
				<section className={style.books}>
					<h2 className={style.booksTitle}>Новинки издательства</h2>
					<div className={style.booksContainer}>
						{books.slice(0, 3).map(item => (
							<Link className={style.link} key={item.id} href={`/books/${item.id}`}>
								<Book key={item.id} {...item} />
							</Link>
						))}
					</div>
				</section>
				<section className={style.video}>
					<h2 id='video' className={style.videoTitle}>
						Видеоконтент проекта
					</h2>
					<div className={style.videoContainer}>
						<iframe
							title='Видеоконтент проекта'
							src='https://www.youtube-nocookie.com/embed/videoseries?list=PLi6aBhEuWKGOuI9HG_K2nEqR7GfuB59sL'
							width='100%'
							height='664px'
							allow='autoplay; encrypted-media; clipboard-write; fullscreen; gyroscope; picture-in-picture;'
						></iframe>
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
