import Script from 'next/script';

const Widget = () => {
	return (
		<>
			<Script src='https://vk.com/js/api/openapi.js?168' strategy='beforeInteractive' />
			<Script>
				{`VK.Widgets.CommunityMessages('vk_community_messages', 136337801, {
					tooltipButtonText: 'Есть вопрос?',
					widgetPosition: 'left',
					expandTimeout: 5000,
				})`}
			</Script>
		</>
	);
};

export default Widget;
