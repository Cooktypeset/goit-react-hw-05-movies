import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';


const Loader = () => {
    return (
        <div className={css.loader}>
            <Oval
                height={80}
                width={80}
                color="#3f72b5"
                wrapperStyle={{}}
                wrapperClass=''
                visible={true}
                araiaLabel="oval-loading"
                secondaryColor='#3f72b5'
                strokeWidth={5}
                strokeWidthSecondary={5}
            />
        </div>
    );
};

export default Loader;