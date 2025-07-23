import { useParams } from 'react-router-dom';
import posts from '../data/posts';
import styles from '../styles/Post.module.css';

function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) return <p>Post not found</p>;

  return (
    <div className={styles.container}>
      <img src={post.image} alt={post.title} className={styles.image} />
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.date}>{post.date}</p>
      <p className={styles.content}>{post.content}</p>
    </div>
  );
}

export default Post;
