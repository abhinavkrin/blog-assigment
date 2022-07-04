/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from '../styles/BlogCard.module.scss';

export default function BlogCard({post,admin}){
	const router = useRouter();
	const deletePost = async () => {
		try {
			const response = await fetch('/api/posts',{
				method: 'DELETE',
				headers: new Headers({
					'Content-Type': 'application/json',
					Accept: 'application/json',
				}),
				body: JSON.stringify({id: post.id})
			});
			alert("Post deleted.");
			window.location.href = '/admin/';
		} catch(e) {
			console.error(e);
			alert('Failed to delete post');
		}
	}
	return (
		<div className={classes.blogCardContainer}>
			<div className={classes.blogCardImageContainer}>
				<img src={post.img} alt={post.title} className={classes.blogCardImage}/>
			</div>
			<div className={classes.blogCardTitle}>
				<Link href={`/posts/${post.id}`}>
					<a>{post.title}</a>
				</Link>
			</div>
			<div className={classes.blogCardMeta}>
				<span>{post.author}</span>
				<span>{new Date(post.date).toDateString()}</span>
			</div>
			{admin && 
			<ul style={{display:"flex", flexDirection: "row", listStyle:"none"}}>
				<li>
					<button onClick={() => router.push('/admin/posts/'+post.id)}>Edit</button>
				</li>
				<li>
					<button onClick={deletePost}>Delete</button>
				</li>
			</ul>}
		</div>
	)
}