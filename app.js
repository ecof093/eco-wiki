document.addEventListener("DOMContentLoaded", () => {

const searchButton = document.getElementById("searchButton");
const searchBox = document.getElementById("searchBox");

searchButton.addEventListener("click", () => {

const keyword = searchBox.value.trim();

if(keyword === ""){
alert("Please enter an article code.");
return;
}

window.location.href = "article.html?search=" + encodeURIComponent(keyword);

});

searchBox.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){
searchButton.click();
}

});

const langButtons=document.querySelectorAll(".language button");

langButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

alert("Language system will be available in Stage 3.");

});

});

});
