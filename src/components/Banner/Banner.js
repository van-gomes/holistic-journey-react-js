import styles from '../Banner/Banner.module.css';
import bannerUm from '../../assets/banner-1.jpg';

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src={bannerUm} alt="banner" />
    </div>
  );
};
