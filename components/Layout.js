import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children, setMenuActive }) => {
	return (
		<div className='content'>
			<Header setMenuActive={setMenuActive} />
			{children}
			<Footer />
		</div>
	);
};
