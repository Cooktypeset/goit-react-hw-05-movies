import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css'

const MovieDetails = ({ value }) => {
    const location = useLocation();
    const defaultImg =
        'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    return (
        <ul className={css.trend_list}>
            {value.map(val => {
                return (
                    <Link
                        className={css.trend_link}
                        to={`/movies/${val.id}`}
                        key={val.id}
                        state={{ from: location }}>
                        <li className={css.trend_item}>
                            <img
                                className={css.trend_poster}
                                src={
                                    val.poster_path
                                        ? 'https://image.tmdb.org/t/p/w300' + val.poster_path
                                        : defaultImg
                                }
                                alt="poster"
                            />
                            <p className={css.trend_name}>{val.title}</p>
                        </li>
                    </Link>
                );
            })}
        </ul>
    );
};

MovieDetails.propTypes = {
    value: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
        })
    ),
};

export default MovieDetails