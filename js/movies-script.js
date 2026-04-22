"use strict";

const movies = [
{
    id: 1,
    titel: "Inception",
    genre: "science-fiction",
    year: 2010,
    duration: "2 timer og 28 minutter",
    img: "img/inception.webp",
    url: "https://www.imdb.com/title/tt1375666/"
},

{
    id: 2,
    titel: "The Dark Knight",
    genre: "action",
    year: 2008,
    duration: "2 timer og 32 minutter",
    img: "img/the-dark-knight.webp",
    url: "https://www.imdb.com/title/tt0468569/"
},

{
  id: 3,
  titel: "Forrest Gump",
  genre: "drama",
  year: 1994,
  duration: "2 timer og 22 minutter",
  img: "img/forrest-gump.webp",
  url: "https://www.imdb.com/title/tt0109830/"
},
{
    id: 4,
    titel: "Superbad",
    genre: "comedy",
    year: 2007,
    duration: "1 time og 53 minutter",
    img: "img/superbad.webp",
    url: "https://www.imdb.com/title/tt0829482/"
},

{
    id: 5,
    titel: "It",
    genre: "horror",
    year: 2017,
    duration: "2 timer og 15 minutter",
    img: "img/it.webp",
    url: "https://www.imdb.com/title/tt1396484/"
}


{
    id: 6,
    titel: "The Hangover",
    genre: "comedy",
    year: 2009,
    duration: "1 time og 48 minutter",
    img: "img/the-hangover.webp",
    url: "https://www.imdb.com/title/tt1119646/"
},

{
   id: "7",
   titel: "The Conjuring",
   genre: "horror",
   year: 2013,
   duration: "1 time og 53 minutter",
   img: "img/the-conjuring.webp",
   url: "https://www.imdb.com/title/tt1457767/"
},

{
  id: "8",
  titel: "Interstellar",
  genre: "science-fiction",
  year: 2014,
  duration: "2 timer og 55 minutter",
  img: "img/interstellar.jpg",
  url: "https://www.imdb.com/title/tt0816692/"
},

{
    id: "9",
    titel: "The Matrix",
    genre: "science-fiction",
    year: 1999,
    duration: "3 timer og 2 minutter",
    img: "img/the-matrix.webp",
    url: "https://www.imdb.com/title/tt0133093/"
}

{
   id: "10",
   titel: "Pulp Fiction",
   genre: "drama",
   year: 1994,
   duration: "1 time og 39 minutter",
   img: "img/pulp-fiction.webp",
   url: "https://www.imdb.com/title/tt0110912/"
 
}

];

const moviesContainer = document.querySelector("#movies-container");

function displayMovies(movieList) {

const html = movieList.map((movie) => {
    return `<article>
    <h2>${movie.titel}</h2>
    <ul>
        <li>Genre: ${movie.genre}</li>
        <li>År: ${movie.year}</li>
        <li>Varighed: ${movie.duration} timer</li>
    </ul>
    <figure>
        <a href="${movie.url}" target="_blank" rel="noopener noreferrer">
            <img src="img-placeholder" alt="title-placeholder">
        </a>
        <figcaption>Læs mere på IMDB</figcaption>
    </figure>
</article>`;

  moviesContainer.innerHTML = html;
};

displayMovies(movies);

