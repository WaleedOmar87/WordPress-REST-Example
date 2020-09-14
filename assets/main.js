document.addEventListener('DOMContentLoaded' , () => {
	/*
		This endpoint is uses to retrieve elementor blocks content from certain page based on page id
		@var website : wordpress live site
		@var pageID : the page id to retrieve elementor blocks content from
	*/
	const website = 'http://localhost:8888/wordpress_test';
	const pageID = 256;
	const WPEndpoint = 'http://localhost:8888/wordpress_test/wp-json/CRB_Test_Block/v1/pages/256/getElementorContent';

	/*
		A Simple fetch request to the server
	*/
	const getPosts = fetch(WPEndpoint);
	getPosts.then(res => {
		console.log(res)
	})
});