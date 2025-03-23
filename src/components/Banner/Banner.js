import styles from '../Banner/Banner.module.css';
import greenBanner from '../../assets/green_banner.jpg';

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src={greenBanner} alt="banner" />
    </div>
  );
};
