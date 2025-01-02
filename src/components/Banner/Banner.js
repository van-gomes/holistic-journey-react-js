import styles from '../Banner/Banner.module.css';
import banner from '../../assets/banner.jpg';

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src={banner} alt="banner" />
    </div>
  );
};
