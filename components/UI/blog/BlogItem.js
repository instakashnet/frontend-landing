import Link from 'next/link';
import styles from '../../../styles/UI.module.scss';
import moment from 'moment';

moment.locale('es');

const BlogItem = ({ post, className }) => {
  return (
    <article className={`${styles.blogItem} ${className || ''}`}>
      <Link href='/post/[slug]' as={`/post/${post.slug}`}>
        <a>
          <img src={post.feature_image} alt={post.title} />
        </a>
      </Link>
      <Link href='/post/[slug]' as={`/post/${post.slug}`}>
        <a>
          <h3>{post.title}</h3>
        </a>
      </Link>
      <span>{moment(post.published_at).format('DD MMM [del] YYYY')}</span>
      <p>{post.custom_excerpt}</p>
    </article>
  );
};

export default BlogItem;
