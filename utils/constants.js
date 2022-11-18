import telegram from '../public/images/telegram.svg';
import vkontakte from '../public/images/vk.svg';
import youtube from '../public/images/youtube.svg';
import FooterTg from '../public/images/footer-telegram.svg';
import FooterVk from '../public/images/footer-vk.svg';
import FooterYt from '../public/images/footer-youtube.svg';
import FirstCloud from '../public/images/first-cloud.svg';
import SecondCloud from '../public/images/second-cloud.svg';
import ThirdCloud from '../public/images/third-cloud.svg';

export const headerNavigationData = [
	{ linkName: 'Книги', linkHref: '/books' },
	{ linkName: 'Видеоконтент', linkHref: '/#video' },
	{ linkName: 'Контакты', linkHref: '/contacts' },
];

export const menuNavigationData = [
	{ linkName: 'Главная', linkHref: '/' },
	{ linkName: 'Книги', linkHref: '/books' },
	{ linkName: 'Видеоконтент', linkHref: '/#video' },
	{ linkName: 'Контакты', linkHref: '/contacts' },
];

export const headerSocialData = [
	{
		socialHref: 'https://t.me/dobroe_detstvo',
		socialIcon: telegram,
		socialName: 'Телеграм',
		isYoutube: false,
	},
	{
		socialHref: 'https://vk.com/izdatel_dobroe_detstvo',
		socialIcon: vkontakte,
		socialName: 'ВКонтакте',
		isYoutube: false,
	},
	{
		socialHref: 'https://www.youtube.com/channel/UCaiMuGF8LARjnHdsUrDRy9A',
		socialIcon: youtube,
		socialName: 'Ютуб',
		isYoutube: true,
	},
];

export const menuSocialData = [
	{
		socialHref: 'https://t.me/dobroe_detstvo',
		socialIcon: telegram,
		socialName: 'Телеграм',
	},
	{
		socialHref: 'https://vk.com/izdatel_dobroe_detstvo',
		socialIcon: vkontakte,
		socialName: 'ВКонтакте',
	},
	{
		socialHref: 'https://www.youtube.com/channel/UCaiMuGF8LARjnHdsUrDRy9A',
		socialIcon: youtube,
		socialName: 'Ютуб',
	},
];

export const footerSocialData = [
	{
		socialHref: 'https://t.me/dobroe_detstvo',
		socialIcon: FooterTg,
		socialName: 'Телеграм',
	},
	{
		socialHref: 'https://vk.com/izdatel_dobroe_detstvo',
		socialIcon: FooterVk,
		socialName: 'ВКонтакте',
	},
	{
		socialHref: 'https://www.youtube.com/channel/UCaiMuGF8LARjnHdsUrDRy9A',
		socialIcon: FooterYt,
		socialName: 'Ютуб',
	},
];

export const contactData = [
	{
		appeal: 'Дорогой Художник!',
		vacancyText:
			'Если ты умеешь создавать реалистичные, яркие образы своими рисунками. Если понимаешь, что рисунки в детских книгах — это еще один вариант обучения и здесь нет места негативу или неверным пропорциям. Если рисуешь от руки и готов учиться правилам безопасных детских иллюстрации. Обязательно пиши нам!',
		mailto: 'mailto:kontakt@dobroedetstvo.ru?subject=Сотрудничество с издательством: художник',
	},
	{
		appeal: 'Дорогой Писатель!',
		vacancyText:
			'Если ты знаешь особенности детской литературы и понимаешь важность традиционных семейных ценностей, которые мы храним и доносим до детей. Если умеешь писать легкие для восприятия и одновременно поучительные тексты для детей от трёх до семи лет. Обязательно пиши нам!',
		mailto: 'mailto:kontakt@dobroedetstvo.ru?subject=Сотрудничество с издательством: писатель',
	},
];

export const peculiaritiesData = [
	{
		text: 'Издаем развивающие детские книги, созданные на основе правильных и психологически безопасных историй.',
		image: FirstCloud,
		alt: 'Мы выпускаем развивающие книги',
	},
	{
		text: 'Рассказываем, как именно образы из книг, мультфильмов и других популярных медиа влияют на детей, а значит — на наше будущее.',
		image: SecondCloud,
		alt: 'Разбираем популярные медиа-продукты',
	},
	{
		text: 'Проводим вебинары, форумы по актуальным темам воспитания детей, здоровьесберегающим технологиям и многом другом.',
		image: ThirdCloud,
		alt: 'Проводим вебинары и форумы',
	},
];
