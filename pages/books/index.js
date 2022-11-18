import Head from 'next/head';
import Link from 'next/link';
import { Book } from '../../components/Book';
import style from '../../styles/Books.module.css';

export const getServerSideProps = () => {
	return fetch('https://632054139f82827dcf2a1cca.mockapi.io/bookz')
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

const Books = ({ books }) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='canonical' href='/books' />
				<meta
					name='description'
					content='Ассортимент детских книг издательства «Доброе детство». Самые выгодные цены. Заказывайте онлайн и выбирайте удобный способ доставки.'
				/>
				<meta name='keywords' content='доброе детство, издательство, книги, купить' />
				<meta property='og:title' content='Книги «Доброго детства»' />
				<meta property='og:description' content='Книжный ассортимент издательства по самым выгодным ценам.' />
				<meta property='og:type' content='website' />
				<meta property='og:image' content='../public/ogg.png' />
				<meta property='og:url' content='https://dobroedetstvo.ru/books' />
				<title>Книги | «Доброе детство»</title>
			</Head>

			<section className={style.books}>
				<h1 className={style.title}>Книги издательства</h1>
				<p className={style.description}>
					В&nbsp;представленных книгах все иллюстрации добрые. Что это значит? Все персонажи нарисованы
					художником с&nbsp;душой и&nbsp;любовью. Особое внимание уделено анатомии и&nbsp;внешним признакам
					животных, выдержана высокая степень сходства. Мимика на&nbsp;мордочках зверят отображает эмоции,
					которые они испытывают. Это один из&nbsp;самых важных моментов для детской иллюстрации.
				</p>
				<div className={style.booksContainer}>
					{books.map(item => (
						<Link className={style.link} key={item.id} href={`/books/${item.id}`}>
							<Book {...item} />
						</Link>
					))}
				</div>
			</section>
		</>
	);
};

export default Books;
