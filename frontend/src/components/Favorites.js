import React from "react";
import "../styles/Favorites.css";
import DuneImage from "../Images/Dune.jpg";
import BookImage from "../Images/book.webp";

const Favorites = () => (
  <div className="favorites-container">
    <h2>My Favorites</h2>
    <ul>
      <li>
        <h3>Favorite Movie: Dune</h3>
        <p>
          <img
            src={DuneImage}
            alt="Dune Movie Poster"
            className="favorite-image"
          />
          "Dune" is a masterpiece based on the famous novel series of the same
          name. It’s an epic tale of politics, power, and destiny. Everyone
          should watch it!
        </p>
      </li>
      <li>
        <h3>Favorite Book: Fire and Blood</h3>
        <p>
          <img
            src={BookImage}
            alt="Fire and Blood Book Cover"
            className="favorite-image"
          />
          "Fire and Blood" dives into the history of the Targaryens from "Game
          of Thrones," set 200 years before the events of the show. It’s an
          incredible read for fans of Westeros.
        </p>
      </li>
      <li>
        <h3>Favorite Music: Punjabi</h3>
        <p>
          I love listening to Punjabi music as it is deeply rooted in my culture
          and mother tongue. Influenced by various genres, especially RAP, it’s
          a beautiful mix of tradition and modernity.
        </p>
        <p>
          <a
            href="https://open.spotify.com/playlist/37i9dQZF1DWXVJK4aT7pmk?si=GLKhgR_yRhGfHsxIGJXBqA&pi=u-xTZTV29eSq6E" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Here’s my Spotify Playlist. Check it out!
          </a>
        </p>
      </li>
    </ul>
  </div>
);

export default Favorites;
