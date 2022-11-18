import { Layout } from '../components/Layout';
import { useState } from 'react';
import { Menu } from '../components/Menu';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function App({ Component, pageProps }) {
	const [menuActive, setMenuActive] = useState(false);
	const router = useRouter();

	return (
		<div className={router.pathname === '/' ? 'App_background_image' : 'App'}>
			<Layout setMenuActive={setMenuActive}>
				<Component {...pageProps} />
			</Layout>
			<Menu menuActive={menuActive} setMenuActive={setMenuActive} />
		</div>
	);
}

export default App;
