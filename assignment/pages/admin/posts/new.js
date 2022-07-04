import posts from '../../../sample/posts.json'
import AdminLayout from '../../../layouts/AdminLayout';
import NewPost from '../../../components/NewPost';
export default function AdminPostPage(){
	return (
		<AdminLayout>
			<main>
				<NewPost/>
			</main>
		</AdminLayout>
	)
}