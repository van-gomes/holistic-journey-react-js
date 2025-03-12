import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/imagens/facebook.png" alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/imagens/twitter.png" alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/imagens/instagram.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>{/* <img src="/imagens/logo.png" alt="" /> */}</section>
      <section>
        <p>Desenvolvido com amor por Vânia Gomes</p>
      </section>
    </footer>
  );
};
