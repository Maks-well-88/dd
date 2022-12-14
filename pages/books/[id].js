import { useContext } from 'react';
import Head from 'next/head';
import style from '../../styles/BookDetails.module.css';
import Soon from '../../public/images/soon.svg';
import Image from 'next/image';
import BuyButtons from '../../components/BuyButtons';
import { ImageContext } from '../../contexts/ImageContext';
import ImagesCarousel from '../../components/ImagesCarousel';

export const getServerSideProps = async context => {
	const id = context.params.id;
	const res = await fetch(`https://632054139f82827dcf2a1cca.mockapi.io/books/${id}`);
	const data = await res.json();

	if (res.ok) {
		return { props: { book: data } };
	} else {
		return { notFound: true };
	}
};

const BookDetails = ({ book }) => {
	const setPopupState = useContext(ImageContext);

	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='canonical' href={`https://dobroedetstvo.ru/books/${book.id}`} />
				<meta name='description' content={`${book.annotation}`.slice(0, 165) + '...'} />
				<meta name='keywords' content='доброе детство, добрая книга, книга, купить' />
				<meta property='og:title' content={`${book.title}`} />
				<meta property='og:description' content={`${book.annotation}`} />
				<meta property='og:type' content='website' />
				<meta property='og:image' content={book.image} />
				<meta property='og:url' content={`https://dobroedetstvo.ru/books/${book.id}`} />
				<title>{book.title}</title>
			</Head>

			<section className={style.bookDetails}>
				<div className={style.bookDetailsWrapper}>
					<div
						className={style.imageContainer}
						onClick={() => {
							setPopupState({ isOpen: true, content: book.image });
						}}
					>
						<img className={style.image} src={book.image} alt={book.title} />
						{!book.on_sale && <Image className={style.soonImage} src={Soon} alt='Скоро' />}
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
								<BuyButtons book={book} />
							</div>
						)}
					</div>
				</div>
				{book.on_sale && (
					<div className={style.afterDescriptionPricesWrapper}>
						<BuyButtons book={book} />
					</div>
				)}
				<div className={style.teachWrapper}>
					<p className={style.mainTeach}>Научит ребёнка</p>
					<p className={style.teachDescription}>{book.teach}</p>
				</div>
				<ImagesCarousel book={book} />
				{book.has_video && (
					<>
						<h2 className={style.headVideo}>Видео о книге</h2>
						<div id='video' className={style.video}>
							<iframe
								title={book.title}
								width='100%'
								height='664px'
								src={book.video}
								allow='accelerometer; clipboard-write; fullscreen; encrypted-media; gyroscope; picture-in-picture'
							></iframe>
						</div>
					</>
				)}
			</section>
		</>
	);
};

export default BookDetails;
