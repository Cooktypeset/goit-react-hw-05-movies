import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'api/getDataAPI';
import Loader from 'components/Loader/Loader';
import css from './Cast.module.css';


const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { MovieID } = useParams();

  useEffect(() => {
    if (!MovieID) return;
    async function getCast() {
      setIsLoading(true);
      try {
        const data = await getMovieCast(MovieID);
        setCast(data.cast);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getCast();
  }, [MovieID]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops ... Somesing went wrong...</p>}
      {cast && (
        <ul className={css.cast__list}>
          {cast.map(item => {
            return (
              <li key={item.id} className={css.cast__item}>
                <img
                  className={css.cast__photo}
                  src={
                    item.profile_path
                      ? 'https://image.tmdb.org/t/p/w200' + item.profile_path
                      : defaultImg
                  }
                  width={200}
                  alt="actor poster"
                />
                <span>{item.name}</span>
                <span>{item.character}</span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;