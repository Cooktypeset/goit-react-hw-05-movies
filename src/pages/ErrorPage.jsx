import css from './ErrorPage.module.css';

const ErrorPage = () => {
    return (
        <div id={css.main}>
            <div className={css.fof}>
                <h1>Error 404</h1>
            </div>
        </div>
    );
};

export default ErrorPage;