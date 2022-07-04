import {useState, useEffect} from 'react';
import classes from '../styles/PostForm.module.scss';

export default function EditPost({post}){
	const [title,setTitle] = useState(post.title);
	const [postDate,setDate] = useState(() => {
		var d = new Date(post.date);
		var day = ("0" + d.getDate()).slice(-2);
		var month = ("0" + (d.getMonth() + 1)).slice(-2);
		var ds = d.getFullYear()+"-"+(month)+"-"+(day) ;
		return ds;
	});
	const [author,setAuthor]= useState(post.author);
	const [content,setContent] = useState(post.content);

	const onSave = async (e) => {
		e.preventDefault();

		const updatedPost = {
			id: post.id,
			title,
			date: new Date(postDate),
			author,
			content,
			img: post.img
		}

		try {
			const response = await fetch('/api/posts',{
				method: 'PUT',
				headers: new Headers({
					'Content-Type': 'application/json',
					Accept: 'application/json',
				}),
				body: JSON.stringify(updatedPost)
			});
			alert("Post updated.");
		} catch(e) {
			console.error(e);
			alert('Failed to update post');
		}
	}
	return (
		<div>
			
			<form onSubmit={onSave} className={classes.postForm}>
				<div>
					<label>Title: </label>
					<input  type="text" value={title} onChange={e => setTitle(e.target.value)}/>
				</div>
				<div>
					<label>Date: </label>
					<input  type="date" value={postDate} onChange={e => setDate(e.target.value)}/>
				</div>
				<div>
					<label>Author: </label>
					<input  type='text' value={author} onChange={e => setAuthor(e.target.value)}/>
				</div>
				<div>
					<label>Content: </label>
					<textarea value={content} onChange={e => setContent(e.target.value)} style={{display: "block", width: "100%"}} rows="30" cols="50" />
				</div>
				<div>
					<button type='sumbit'>SAVE</button>
				</div>
			</form>
		</div>
	)
}