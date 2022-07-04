// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
export default function handler(req, res) {
	if(req.method === 'POST'){
		const path = __dirname+'/../../../../sample/posts.json'
		const postsStr = fs.readFileSync(path);
		const posts = JSON.parse(postsStr);

		let id =	posts.reduce((acc, p) => {
			return acc > p.id ? acc : p.id
		}, -1) + 1;

		const {
			title,
			date,
			author,
			content,
			img
		} = req.body;
		console.log(req.body)
		const newPost = {
			id,
			title,
			date,
			author,
			content,
			img
		}
		console.log(newPost)
		posts.push(newPost);
		fs.writeFileSync(path,JSON.stringify(posts));
		res.json(newPost);
	} else if(req.method === 'PUT'){
		const path = __dirname+'/../../../../sample/posts.json'
		const postsStr = fs.readFileSync(path);
		const posts = JSON.parse(postsStr);

		const {
			id,
			title,
			date,
			author,
			content,
			img
		} = req.body;
		posts.forEach( p => {
			if(p.id == id){
				p.title = title;
				p.date = date;
				p.author = author;
				p.content = content;
				p.img = img
			}
		})
		fs.writeFileSync(path,JSON.stringify(posts));
		res.json(newPost);
	} else if(req.method === 'DELETE'){
		const path = __dirname+'/../../../../sample/posts.json'
		const postsStr = fs.readFileSync(path);
		const posts = JSON.parse(postsStr);

		const {
			id
		} = req.body;
		const newPosts = posts.filter(p => p.id != id)
		fs.writeFileSync(path,JSON.stringify(newPosts));
		res.json({success: true});
	}
}
