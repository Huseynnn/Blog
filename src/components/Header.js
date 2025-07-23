import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.title}>My Modern Blog</Link>
    </header>
  );
}

export default Header;
