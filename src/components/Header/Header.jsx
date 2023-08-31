import { NavLink } from "react-router-dom";
import css from './Header.module.css'

const Header = () => {
    return (
        <header className={css.header_wrapper}>
            <nav className={css.header_navigation}>
                <NavLink className={css.header_navlink} to="/">
                    Home
                </NavLink>
                <NavLink className={css.header_navlink} to='/movies'>
                    Movies
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;