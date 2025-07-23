import posts from '../data/posts';
import PostCard from '../components/Postcard';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;
