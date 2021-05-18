import Link from 'next/link';
import axios from 'axios';
import moment from 'moment';

import BlogItem from '../components/UI/blog/BlogItem';

import styles from '../styles/Blog.module.scss';

const { CONTENT_API_KEY, BLOG_API_URL } = process.env;

export const getStaticProps = async ({ params }) => {
  const res = await axios.get(`${BLOG_API_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&limit=5&fields=id,title,custom_excerpt,slug,published_at,feature_image`);
  return {
    props: { posts: res.data.posts, meta: res.data.meta },
  };
};

moment.locale('es');

const Blog = ({ posts, meta }) => {
  const recentPost = posts[0];
  const lastPagePost = posts[posts.length - 1];
  const copiedPosts = [...posts];
  copiedPosts.shift();
  copiedPosts.pop();

  return (
    <section className='container section-wrapper'>
      <div className={styles.recentPost}>
        <img src={recentPost.feature_image} alt={recentPost.title} />
        <div className={styles.postInfo}>
          <Link href='/post/[slug]' as={`/post/${recentPost.slug}`}>
            <a>
              <h1>{recentPost.title}</h1>
            </a>
          </Link>
          <span>{moment(recentPost.published_at).format('DD MMM [del] YYYY')}</span>
          <p>{recentPost.custom_excerpt}</p>
          <Link href='/post/[slug]' as={`/post/${recentPost.slug}`}>
            <a>Leer más</a>
          </Link>
        </div>
        <div className={styles.postOverlay} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5'>
          {copiedPosts.map((post) => (
            <BlogItem key={post.id} post={post} />
          ))}
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <BlogItem post={lastPagePost} className='col-span-2' />
      </div>
      <div className={styles.blogNav}>
        <Link href='/#steps'>
          <a>¿Cómo funciona?</a>
        </Link>
        <Link href='/nosotros'>
          <a>Nosotros</a>
        </Link>
        <Link href='/contacto'>
          <a>Contacto</a>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
