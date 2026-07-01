const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const recommended = document.getElementById("recommended");

const articles = [
    {
        code: "N-928",
        type: "Entity",
        desc: "A humanoid entity capable of adapting to unknown environments."
    },
    {
        code: "DOC-014",
        type: "Document",
        desc: "Internal research regarding classified anomalous materials."
    },
    {
        code: "INC-021",
        type: "Incident",
        desc: "Containment breach recorded at Site-03."
    },
    {
        code: "PER-003",
        type: "Personnel",
        desc: "Senior researcher assigned to high-risk projects."
    }
];

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

const randomArticles = [...articles]
.sort(() => Math.random() - 0.5)
.slice(0,4);

randomArticles.forEach(article => {

    recommended.innerHTML += `
        <div class="card">
            <h4>${article.code}</h4>
            <b>${article.type}</b>
            <p>${article.desc}</p>
        </div>
    `;

});
