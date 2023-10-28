document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector("input[type='search']");
    const searchButton = document.getElementById("btn");
    const cards = document.querySelectorAll(".cards");

    searchButton.addEventListener("click", function() {
        const searchTerm = searchInput.value.toLowerCase();

        
        cards.forEach(function(card) {
            card.classList.add("dontDisplay");
        });

        
        cards.forEach(function(card) {
            const cardTitle = card.querySelector("h1").innerText.toLowerCase();
            if (cardTitle.includes(searchTerm)) {
                card.classList.remove("dontDisplay");
                return; 
            }
        });
    });
});
