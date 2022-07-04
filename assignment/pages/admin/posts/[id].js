import posts from '../../../sample/posts.json'
import AdminLayout from '../../../layouts/AdminLayout';
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
	return {
		props: {
			post: posts.find(p => p.id == req.params.id)
		}
	}
}