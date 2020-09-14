document.addEventListener("DOMContentLoaded", () => {
	/*
		This endpoint is uses to retrieve elementor blocks content from certain page based on page id
		@var website : wordpress live site
		@var pageID : the page id to retrieve elementor blocks content from
	*/
	const website = "http://localhost:8888/wordpress_test";
	const pageID = 256;
	const WPEndpoint = `${website}/wp-json/CRB_Test_Block/v1/pages/${pageID}/getElementorContent`;

	/*
		A Simple fetch request to the server
	*/
	const getPosts = fetch(WPEndpoint);
	getPosts
		.then((res) => {
			return res.json();
		})
		.then((data) => {

			/*
				Parse the JSON array that hold _elementor_data meta
			*/
			let obj = JSON.parse(data)[0]

			console.log(obj)

			/*
				Get elementor widgets
			*/
			const elementorWidgets = obj.elements[0].elements

			/*
				Append widgets to the DOM (or you application)
			*/
			const widgetsContainer = document.getElementById('elementor-widgets');

			elementorWidgets.forEach(element => {

				const userName = element.settings.user_name;
				const userPic = element.settings.pic;

				widgetsContainer.insertAdjacentHTML('beforeend', `
					<div class="element">
						<img width="500" src="${userPic.url}" >
						<h4>${userName}</h4>
					</div>
				`);
			})

		});
});
