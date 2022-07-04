import Head from 'next/head'
import BlogList from '../components/BlogList'
import BlogListLayout from '../layouts/BlogListLayout'
import styles from '../styles/Home.module.css'
import fs from 'fs';

export default function Home({posts}) {
  return (
    <BlogListLayout className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogList posts={posts} />
    </BlogListLayout>
  )
}

export const getServerSideProps = (req,res) => {
    const path = __dirname+'/../../../sample/posts.json'
		const postsStr = fs.readFileSync(path);
		const posts = JSON.parse(postsStr);
    return  {
      props: {posts}
    }
}
