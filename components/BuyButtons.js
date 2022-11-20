import style from '../styles/BuyButtons.module.css';
import Link from 'next/link';

const BuyButtons = ({ book }) => {
	return (
		<>
			<ul className={style.prices}>
				<li className={style.buttonWrapper}>
					<Link className={style.link} href={book.konz_href} target='_blank' rel='noreferrer'>
						<p className={style.buttonKonzeptual}>Купить в &laquo;Концептуале&raquo;</p>
					</Link>
					<span className={style.price}>{book.konz_price} руб.</span>
				</li>
				<li className={style.buttonWrapper}>
					<Link className={style.link} href={book.wb_href} target='_blank' rel='noreferrer'>
						<p className={style.buttonWildberries}>Wildberries</p>
					</Link>
					<span className={style.price}>{book.wb_price} руб.</span>
				</li>
				<li className={style.buttonWrapper}>
					<Link className={style.link} href={book.ozon_href} target='_blank' rel='noreferrer'>
						<p className={style.buttonOzon}>Ozon</p>
					</Link>
					<span className={style.price}>{book.ozon_price} руб.</span>
				</li>
				<li className={style.buttonWrapper}>
					<Link className={style.link} href={book.vk_href} target='_blank' rel='noreferrer'>
						<p className={style.buttonVkontakte}>ВКонтакте</p>
					</Link>
					<span className={style.price}>{book.vk_price} руб.</span>
				</li>
			</ul>
		</>
	);
};

export default BuyButtons;
