import { Layout } from '../components/Layout';
import { useState } from 'react';
import { Menu } from '../components/Menu';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import { ImageContext } from '../contexts/ImageContext';
import PopupWithImage from '../components/PopupWithImage';
import Widget from '../components/Widget';

function App({ Component, pageProps }) {
	const [menuActive, setMenuActive] = useState(false);
	const [popupState, setPopupState] = useState({ isOpen: false, content: '' });
	const router = useRouter();

	return (
		<>
			<Widget />
			<div className={router.pathname === '/' ? 'App_background_image' : 'App'}>
				<Layout setMenuActive={setMenuActive}>
					<ImageContext.Provider value={setPopupState}>
						<Component {...pageProps} />
					</ImageContext.Provider>
				</Layout>
				<Menu menuActive={menuActive} setMenuActive={setMenuActive} />
			</div>
			<div id='vk_community_messages'></div>
			{popupState.isOpen && <PopupWithImage popupState={popupState} setPopupState={setPopupState} />}
		</>
	);
}

export default App;
