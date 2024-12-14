import style from '../Banner/Banner.module.css';
import banner from '../../assets/banner.jpg';

export const Banner = () => {
    return (
        <div className={style.banner}>
        <img src={banner} alt="banner" />
        </div>
    );
}

