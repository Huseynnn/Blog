import { Link } from 'react-router-dom';
import styles from '../styles/PostCard.module.css';

function PostCard({ post }) {
  return (
    <Link to={`/post/${post.id}`}>
      <div className={styles.card}>
        <img src={post.image} alt={post.title} className={styles.image} />
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.date}>{post.date}</p>
        <p className={styles.preview}>{post.content.substring(0, 100)}...</p>
      </div>
    </Link>
  );
}

export default PostCard;
