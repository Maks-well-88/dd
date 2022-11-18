import React, { useContext } from 'react';
import style from '../styles/Book.module.css';
import Soon from '../public/images/soon.svg';

export const Book = props => {
	return (
		<article className={style.book}>
			<div className={style.imageWrap}>
				<img className={style.image} src={props.image} alt={props.title} />
				{!props.on_sale && <img className={style.soonImage} src={Soon} alt='Скоро' />}
			</div>
			<h3 className={style.title}>{props.title}</h3>
			<p className={style.author}>
				<span>Автор: </span>
				{props.author}
			</p>
		</article>
	);
};
