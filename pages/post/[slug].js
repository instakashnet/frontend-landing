import axios from "axios";
import Head from "next/head";
import moment from "moment";
import { useRouter } from "next/router";

import styles from "../../styles/Blog.module.scss";

const { CONTENT_API_KEY, API_URL } = process.env;
moment.locale("es");

export const getStaticProps = async ({ params }) => {
  let data = null;

  try {
    const res = await axios.get(
      `${API_URL}/ghost/api/v3/content/posts/slug/${params.slug}/?key=${CONTENT_API_KEY}&limit=5&fields=slug,title,html,custom_excerpt,published_at,feature_image&include=authors`
    );
    data = res.data.posts[0];
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      post: data || null,
    },
  };
};

export const getStaticPaths = () => ({
  paths: [],
  fallback: false,
});

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Cargando...</h1>;
  }

  console.log(post);

  return (
    <article className={styles.post}>
      <Head>
        <title>{post.title} | Instakash</title>
      </Head>
      <div className="container">
        <h1>{post.title}</h1>
        <p className={styles.date}>{moment(post.published_at).format("DD MMM [del] YYYY")}</p>
        <div className={styles.postImage}>
          <img src={post.feature_image} alt={post.slug} />
          <div className={styles.postInfo}>
            <p>{post.custom_excerpt}</p>
          </div>
          <div className={styles.postOverlay} />
        </div>
        <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </article>
  );
};

export default Post;
