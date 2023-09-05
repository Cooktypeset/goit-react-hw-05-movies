import { NavLink } from "react-router-dom";
import css from './Header.module.css'

const Header = () => {
    return (
        <header className={css.header__wrapper}>
            <nav className={css.header__navigation}>
                <NavLink className={css.header__navlink} to="/">
                    Home
                </NavLink>
                <NavLink className={css.header__navlink} to='/movies'>
                    Movies
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;