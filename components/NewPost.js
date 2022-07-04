import {useState, useEffect} from 'react';
import classes from '../styles/PostForm.module.scss';

export default function NewPost(){
	const [title,setTitle] = useState("");
	const [postDate,setDate] = useState(() => {
		var d = new Date();
		var day = ("0" + d.getDate()).slice(-2);
		var month = ("0" + (d.getMonth() + 1)).slice(-2);
		var ds = d.getFullYear()+"-"+(month)+"-"+(day) ;
		return ds;
	});
	const [author,setAuthor]= useState("");
	const [content,setContent] = useState("");

	const onSave = async (e) => {
		e.preventDefault();

		const newPost = {
			title,
			date: new Date(postDate),
			author,
			content,
			img: '/images/banner.png'
		}
		try {
			const response = await fetch('/api/posts',{
				method: 'POST',
				headers: new Headers({
					'Content-Type': 'application/json',
					Accept: 'application/json',
				}),
				body: JSON.stringify(newPost)
			});
			const data =  await response.json();
			alert("Post is saved.");
			window.location.href = '/admin/posts/'+data.id;
		} catch(e) {
			console.error(e);
			alert('Failed to save post');
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