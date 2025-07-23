import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} My Modern Blog. All rights reserved.</p>
      
    </footer>
  );
}

export default Footer;
