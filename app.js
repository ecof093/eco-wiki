const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {

    const keyword = searchInput.value.trim();

    if (keyword === "") {
        alert("Please enter a search term.");
        return;
    }

    alert("Searching for: " + keyword);

});

searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        searchButton.click();
    }

});
