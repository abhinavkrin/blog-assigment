import BlogCard from "./BlogCard";
import classes from '../styles/BlogList.module.scss'
/* eslint-disable @next/next/no-img-element */
export default function BlogList({posts = []}){
	return (
		<div className={classes.blogListContainer}>
			{posts.map(post => (
				<BlogCard key={post.id} post={post} />
			))}
		</div>
	)
}