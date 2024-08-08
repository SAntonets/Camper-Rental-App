import { Audio } from "react-loader-spinner";
import css from './Loader.module.css';

const Loader = () => {
    return (
        <div className={css.loader_wrapper}>
            <Audio
            height="80"
            width="80"
            radius="9"
            color= "var(--button)"
            ariaLabel="three-dots-loading"
            />
        </div>
    );
};

export default Loader;