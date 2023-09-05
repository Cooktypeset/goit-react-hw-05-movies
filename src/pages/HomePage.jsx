import Trends from "components/Trends/Trends";
import css from './HomePage.module.css';

const HomePage = () => {
    return (
        <section className={css.home_section}>
            <Trends />
        </section>
    );
};

export default HomePage;
