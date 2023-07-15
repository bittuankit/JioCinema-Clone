import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "6891f901fc14d482962bd2140287b77a";
const URL = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const popular = "movie/now_playing";
const discover = "discover/movie";
const topRated = "movie/top_rated";
const tvShows = "discover/tv";

const current = new Date();
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novmber",
  "December",
];

const Card = ({ img }) => (
  <div className="card">
    <img src={img} alt="movies-image" />
  </div>
);

const Row = ({ title }) => (
  <div className="row">
    <h3>{title}</h3>
    <div>
      <Card
        img={
          "https://v3img.voot.com/resizeMedium,w_1920,h_1080/v3Storage/assets/inspector-avinash-16x9-1687787842710.jpg?imformat=chrome"
        }
      />
      <Card
        img={
          "https://v3img.voot.com/resizeMedium,w_1920,h_1080/v3Storage/assets/ishq_e_nadaan_16x9_01_cta-1689266522781.jpg?imformat=chrome"
        }
      />
    </div>
  </div>
);

const FeedCard = ({ img }) => (
  <div className="feed-card">
    <img src={img} alt="movies-image" />
  </div>
);

const Feed = ({ title, arr = [] }) => (
  <div className="feed">
    <h3>{title}</h3>
    <div>
      {arr.map((item, index) => (
        <FeedCard img={`${imgUrl}/${item.poster_path}`} key={index} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [topMovie, setTopMovie] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);
  const [tvShow, setTvShow] = useState([]);
  const [tvShow2, setTvShow2] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const {
        data: { results },
      } = await axios.get(`${URL}/${discover}?api_key=${API_KEY}`);
      setMovie(results);
    };
    const fetchTopMovie = async () => {
      const {
        data: { results },
      } = await axios.get(`${URL}/${topRated}?api_key=${API_KEY}`);
      setTopMovie(results);
    };
    const fetchPopularMovie = async () => {
      const {
        data: { results },
      } = await axios.get(`${URL}/${popular}?api_key=${API_KEY}&page=2`);
      setPopularMovie(results);
    };

    const fetchTvShow = async () => {
      const {
        data: { results },
      } = await axios.get(`${URL}/${tvShows}?api_key=${API_KEY}`);
      setTvShow(results);
    };

    const fetchTvShow2 = async () => {
      const {
        data: { results },
      } = await axios.get(`${URL}/${tvShows}?api_key=${API_KEY}&page=2`);
      setTvShow2(results);
    };

    fetchMovie();
    fetchTopMovie();
    fetchPopularMovie();
    fetchTvShow();
    fetchTvShow2();
  }, []);

  return (
    <>
      <section className="home">
        <div
          className="banner"
          style={{
            backgroundImage: movie[0]
              ? `url(${`${imgUrl}/${movie[0].poster_path}`})`
              : "rgb(16, 16, 16)",
          }}
        ></div>
        <Row title={"Hot Right Now 🔥"} />
        <Feed title={`${month[current.getMonth()]} Bingelist 👀`} arr={movie} />
        <Feed title={"Most Watched Blockbusters 🍿"} arr={popularMovie} />
        <Feed title={"Fresh Episodes 📺"} arr={tvShow} />
        <Feed title={"2023 Emmy Nominees"} arr={topMovie} />
        <Feed title={"Popular Hollywood Shows"} arr={tvShow2} />
      </section>
    </>
  );
};

export default Home;
