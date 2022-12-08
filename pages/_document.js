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
				<script dangerouslySetInnerHTML={{
					__html: `
					(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
					m[i].l=1*new Date();
					for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
					k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
					(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym")
					ym(90529306, "init", {
						clickmap:true,
						trackLinks:true,
						accurateTrackBounce:true,
						webvisor:true
					})`
				}}/>
				<noscript>
					<div>
						<img src='https://mc.yandex.ru/watch/90529306' style={{position:'absolute', left:'-9999px'}} alt='' />
					</div>
				</noscript>
				<script type='text/javascript' src='https://vk.com/js/api/openapi.js?168'></script>
			</body>
		</Html>
	);
};

export default Document;
