import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieBySearch } from '../api/getDataAPI';
import css from './MoviesPage.module.css';

import Loader from 'components/Loader/Loader';
import MovieDetails from '../components/MovieDetails/MoviesDetails';

const MoviesPage = () => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
    const { query } = event.currentTarget;
    setSearchParams({ query: query.value });

    query.value = '';
  };

  useEffect(() => {
    if (!searchParams.get('query')) return;

    async function getQuery() {
      setIsLoading(true);
      try {
        const data = await getMovieBySearch(searchParams.get('query'));
        setValue(data.results);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getQuery();
  }, [searchParams]);

  return (
    <div>
      <div className={css.search__bar}>
        <form onSubmit={onSubmit} className={css.search__form}>
          <input
            className={css.search__input}
            type="text"
            name="query"
            autoComplete="off"
          />
          <button className={css.search__btn} type="submit">
            Search
          </button>
        </form>
      </div>
      {isLoading && <Loader />}
      {error && <p>Oops ... Somesing went wrong...</p>}
      {value.length > 0 && <MovieDetails value={value} />}
    </div>
  );
};

export default MoviesPage;