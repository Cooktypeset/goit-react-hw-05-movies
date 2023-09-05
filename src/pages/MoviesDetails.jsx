import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieDetails } from '../api/getDataAPI';
import Loader from 'components/Loader/Loader';

import css from './MovieDetails.module.css';

const MoviesDetails = () => {
  const [info, setInfo] = useState({});
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { MovieID } = useParams();

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setIsLoading(true);
    async function getDetails() {
      try {
        const data = await getMovieDetails(MovieID);
        setInfo(data);
        setGenres(data.genres);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getDetails();
  }, [MovieID]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      {error && <p>Oops ... Somesing went wrong...</p>}
      <Link to={backLink.current}>
        <button className={css.backbutoon} type="button">
          Go back
        </button>
      </Link>
      {info && (
        <div className={css.details__wrapper}>
          <div>
            <img
              className={css.details__poster}
              src={
                info.poster_path
                  ? 'https://image.tmdb.org/t/p/w300' + info.poster_path
                  : defaultImg
              }
              alt=""
            />
          </div>
          <div className={css.text__wrapper}>
            <h2>
              {info.original_title} (
              {info.release_date && info.release_date.slice(0, 4)})
            </h2>
            <p>User score: {Math.round((info.vote_average / 10) * 100)}%</p>
            <h3>Overview</h3>
            <p>{info.overview}</p>
            <h4>Genres</h4>
            {genres.map(gener => (
              <span key={gener.id}>{gener.name}</span>
            ))}
          </div>
        </div>
      )}

      <div className={css.addinfo__wrapper}>
        <p className={css.title__wrapper}>Additional information</p>
        <div className={css.link__buttons_wrapper}>
          <Link to="cast">
            <button type="button" className={css.link__buttons}>
              Cast
            </button>
          </Link>
          <Link to="reviews">
            <button type="button" className={css.link__buttons}>
              Reviews
            </button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MoviesDetails;