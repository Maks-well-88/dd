import Head from 'next/head';
import style from '../../styles/BookDetails.module.css';
import Soon from '../../public/images/soon.svg';

export const getServerSidePaths = () => {
	const data = fetch('https://632054139f82827dcf2a1cca.mockapi.io/bookz')
		.then(res => {
			return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
		})
		.then(data => ({ props: { books: data } }))
		.catch(err => console.error(err));

	const paths = data.map(book => ({
		params: { id: book.id },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getServerSideProps = context => {
	const id = context.params.id;

	return fetch(`https://632054139f82827dcf2a1cca.mockapi.io/bookz/${id}`)
		.then(res => {
			return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
		})
		.then(data => ({ props: { book: data } }))
		.catch(err => {
			console.error(err);
			return { notFound: true };
		});
};

const BookDetails = ({ book }) => {
	// const booksListData = useContext(BooksListContext);
	// const id = useParams();
	// const book = name();

	// function name() {
	// 	return booksListData.books.length && booksListData.books.find(item => item.link_param === id.name);
	// }

	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='canonical' href={`/books/${book.link_param}`} />
				<meta name='description' content={`${book.annotation}`.slice(0, 165) + '...'} />
				<meta name='keywords' content='доброе детство, добрая книга, книга, купить' />
				<meta property='og:title' content={`${book.title}`} />
				<meta property='og:description' content={`${book.annotation}`} />
				<meta property='og:type' content='website' />
				<meta property='og:image' content={book.image} />
				<meta property='og:url' content={`https://dobroedetstvo.ru/books/${book.link_param}`} />
				<title>{book.title}</title>
			</Head>

			<section className={style.bookDetails}>
				<div className={style.bookDetailsWrapper}>
					<div
						className={style.imageContainer}
						onClick={() => {
							booksListData.setPopupOpen(true);
							booksListData.setBookImage(book.image);
						}}
					>
						<img className={style.image} src={book.image} alt={book.title} />
						{!book.on_sale && <img className={style.soonImage} src={Soon} alt='Скоро' />}
					</div>
					<div className={style.bookDescription}>
						<h1 className={style.title}>{book.title}</h1>
						<p className={style.author}>
							<span>Автор: </span>
							{book.author}
						</p>
						<p className={style.annotation}>{book.annotation}</p>
						{book.on_sale && (
							<div className={style.descriptionPricesWrapper}>
								<ul className={style.prices}>
									<li className={style.buttonWrapper}>
										<a className={style.link} href={book.konz_href} target='_blank' rel='noreferrer'>
											<p className={style.buttonKonzeptual}>Купить в &laquo;Концептуале&raquo;</p>
										</a>
										<span className={style.price}>{book.konz_price} руб.</span>
									</li>
									<li className={style.buttonWrapper}>
										<a className={style.link} href={book.wb_href} target='_blank' rel='noreferrer'>
											<p className={style.buttonWildberries}>Wildberries</p>
										</a>
										<span className={style.price}>{book.wb_price} руб.</span>
									</li>
									<li className={style.buttonWrapper}>
										<a className={style.link} href={book.ozon_href} target='_blank' rel='noreferrer'>
											<p className={style.buttonOzon}>Ozon</p>
										</a>
										<span className={style.price}>{book.ozon_price} руб.</span>
									</li>
									<li className={style.buttonWrapper}>
										<a className={style.link} href={book.vk_href} target='_blank' rel='noreferrer'>
											<p className={style.buttonVkontakte}>ВКонтакте</p>
										</a>
										<span className={style.price}>{book.vk_price} руб.</span>
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>
				{book.on_sale && (
					<div className={style.afterDescriptionPricesWrapper}>
						<ul className={style.prices}>
							<li className={style.buttonWrapper}>
								<a className={style.link} href={book.konz_href} target='_blank' rel='noreferrer'>
									<p className={style.buttonKonzeptual}>Купить в &laquo;Концептуале&raquo;</p>
								</a>
								<span className={style.price}>{book.konz_price} руб.</span>
							</li>
							<li className={style.buttonWrapper}>
								<a className={style.link} href={book.wb_href} target='_blank' rel='noreferrer'>
									<p className={style.buttonWildberries}>Wildberries</p>
								</a>
								<span className={style.price}>{book.wb_price} руб.</span>
							</li>
							<li className={style.buttonWrapper}>
								<a className={style.link} href={book.ozon_href} target='_blank' rel='noreferrer'>
									<p className={style.buttonOzon}>Ozon</p>
								</a>
								<span className={style.price}>{book.ozon_price} руб.</span>
							</li>
							<li className={style.buttonWrapper}>
								<a className={style.link} href={book.vk_href} target='_blank' rel='noreferrer'>
									<p className={style.buttonVkontakte}>ВКонтакте</p>
								</a>
								<span className={style.price}>{book.vk_price} руб.</span>
							</li>
						</ul>
					</div>
				)}
				<div className={style.teachWrapper}>
					<p className={style.mainTeach}>Научит ребёнка</p>
					<p className={style.teachDescription}>{book.teach}</p>
				</div>
				{/* <ImagesCarousel book={book} /> */}
				{book.has_video && (
					<>
						<h2 className={style.headVideo}>Видео о книге</h2>
						<div id='video' className={style.video}>
							<div id='my_playlist'></div>
							<div id='vk_playlist_-147845620_5'></div>
							<div id='vk_playlist_-147845620_508'></div>
							<iframe
								title='Видео о книге'
								src='https://vk.com/video_ext.php?oid=-136337801&id=456239473&hash=160120364c694f2f&hd=2'
								width='100%'
								height='664px'
								allow='autoplay; encrypted-media; fullscreen; picture-in-picture;'
							></iframe>
						</div>
					</>
				)}
			</section>
		</>
	);
};

export default BookDetails;
