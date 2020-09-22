document.addEventListener("DOMContentLoaded", () => {
	const homeStyle = document.createElement('style');
	homeStyle.type = 'text/css';
	
	const css = `
	@import url(https://tsutoringo.github.io/Nyobiko-themeCSS/smart.css);
	:root {
		--background-tertiary: #202225;
		--normal-text: #dcddde;
		--background-primary: #36393f;
		--divider-color: #525252;
		--u-list-bg-hover: #2b2d2f;
	
		--gate-colosed-color-1: #36393f80;
		--gate-colosed-color-2: #20222560;
	}
	`;
	
	homeStyle.innerText = css.replace(/\n/g, '');
	document.head.appendChild(homeStyle);
});