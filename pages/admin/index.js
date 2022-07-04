import posts from '../../sample/posts.json'
import AdminLayout from '../../layouts/AdminLayout';
import AdminPostList from '../../components/AdminPostList';
import fs from 'fs';
export default function AdminPostPage({posts}){
	return (
		<AdminLayout>
			<main>
				<AdminPostList posts={posts}/>
			</main>
		</AdminLayout>
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
