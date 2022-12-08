import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html lang='ru' prefix='og: [http://ogp.me/ns#](http://ogp.me/ns#)'>
			<Head>
				<meta charSet='utf-8' />
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#8a7872' />
				<link rel='shortcut icon' href='/favicon.ico' />
				<meta name='msapplication-TileColor' content='#caaea5' />
				<meta name='msapplication-config' content='/browserconfig.xml' />
				<meta name='theme-color' content='#ffffff' />
				<link rel='manifest' href='/manifest.json' />
			</Head>
			<body>
				<Main />
				<NextScript />
				<script type='text/javascript' src='https://vk.com/js/api/openapi.js?168'></script>
			</body>
		</Html>
	);
};

export default Document;
