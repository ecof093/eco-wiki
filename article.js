const params = new URLSearchParams(window.location.search);

const article = params.get("search");

const articleTitle = document.getElementById("articleTitle");
const articleID = document.getElementById("articleID");
const description = document.getElementById("description");

if(article){

articleTitle.textContent = article;

articleID.textContent = article;

description.textContent =
"This article has not been documented by the ECO Foundation.";

}else{

articleTitle.textContent = "Unknown Article";

articleID.textContent = "Unknown";

description.textContent =
"No article selected.";

}
