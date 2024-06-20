document.addEventListener("DOMContentLoaded", function () {
    // Search Functionality
    const searchForm = document.querySelector("#search form");
    const searchInput = document.querySelector("#search input");
    const movies = document.querySelectorAll(".movie");
  
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const query = searchInput.value.toLowerCase();
      movies.forEach((movie) => {
        const movieName = movie.querySelector(".play .name").textContent.toLowerCase();
        if (movieName.includes(query)) {
          movie.style.display = "block";
        } else {
          movie.style.display = "none";
        }
      });
    });
  
    // Show Movie Name on Hover
    movies.forEach((movie) => {
      const movieImage = movie.querySelector(".movie-image");
      const playSpan = movie.querySelector(".play");
      movieImage.addEventListener("mouseover", () => {
        playSpan.style.display = "block";
      });
      movieImage.addEventListener("mouseout", () => {
        playSpan.style.display = "none";
      });
    });
  
    // Display Movie Rating Dynamically
    movies.forEach((movie) => {
      const starsIn = movie.querySelector(".stars-in");
      const rating = Math.floor(Math.random() * 5) + 1; // Random rating between 1 and 5
      starsIn.style.width = `${(rating / 5) * 100}%`;
    });
  
    // Smooth Scroll for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
});
