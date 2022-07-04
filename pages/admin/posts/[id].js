import AdminLayout from '../../../layouts/AdminLayout';
import fs from 'fs';
import EditPost from '../../../components/EditPost';
export default function AdminPostPage({post}){
	return (
		<AdminLayout>
			<main>
				<EditPost post={post} />
			</main>
		</AdminLayout>
	)
}

export const getServerSideProps = async (req, res) => {
	const path = __dirname+'/../../../../../sample/posts.json'
		const postsStr = fs.readFileSync(path);
		const posts = JSON.parse(postsStr);
	return {
		props: {
			post: posts.find(p => p.id == req.params.id)
		}
	}
}