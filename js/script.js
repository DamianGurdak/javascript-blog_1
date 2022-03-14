const titleClickHandler = function (event) {
	console.log("Link was clicked!");
	console.log(event);
	event.preventDefault();
	const clickedElement = this; //odniesienie do klikniętego linka
	console.log("THIS: ", this);

	/* [DONE] remove class 'active' from all article links  */

	const activeLinks = document.querySelectorAll(".titles a.active");

	for (let activeLink of activeLinks) {
		activeLink.classList.remove("active");
	}

	/* [DONE] add class 'active' to the clicked link */

	console.log("clickedElement:", clickedElement);

	clickedElement.classList.add("active"); //kliknięty link powinien otrzymywać klasę active

	/* [DONE] remove class 'active' from all articles */

	const activeArticles = document.querySelectorAll(".posts article.active");

	for (let activeArticle of activeArticles) {
		activeArticle.classList.remove("active");
	}

	/* [DONE] get 'href' attribute from the clicked link */

	const articleSelector = clickedElement.getAttribute("href").substring(1);
	console.log("articleSelector:", articleSelector);

	/* [DONE] find the correct article using the selector (value of 'href' attribute) */

	const targetArticle = document.querySelector(
		`article[id=${articleSelector}]`
	);
	console.log("targetArticle", targetArticle);

	/* [DONE] add class 'active' to the correct article */

	targetArticle.classList.add("active");
};

const links = document.querySelectorAll(".titles a");

for (let link of links) {
	link.addEventListener("click", titleClickHandler);
}

const optArticleSelector = ".post",
	optTitleSelector = ".post-title", // srodek
	optTitleListeSelector = ".titles";

function generateTitleLinks() {
	/* [IN PROGRESS] remove contents of titleList */ //clear message nie działa

	const titleList = document.querySelector(optTitleListeSelector);

	// function clearMessages() {
	// 	document.getElementById('article').innerHTML = "";
	// 	//.innerHTML = optTitleListeSelector;
	// }
	// clearMessages();

	/*  [IN PROGRESS] for each article */

	const articles = optArticleSelector;

	/*  [IN PROGRESS] get the article id */

	const artcicleId = document.getElementById();
	console.log("articleId", artcicleId);

	/* find the title element */ 		//co robi inner


	/* get the title from the title element */

	/* create HTML of the link */

	/* insert link into titleList */
}

generateTitleLinks();
