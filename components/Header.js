import Link from "next/link";

export default function Header({}){
	return (
		<>
		<header>
			<div style={{padding: "0.5rem 1rem"}}>Blog Website</div>
			<Link href="/" >
				<a style={{padding: "0.5rem 1rem"}}>Home</a>
			</Link>
			<Link href="/admin">
				<a style={{padding: "0.5rem 1rem"}}>Dashboard</a>
			</Link>
			<Link href="/admin/posts/new">
				<a style={{padding: "0.5rem 1rem"}}>New</a>
			</Link>
		</header>

		<p style={{maxWidth:"350px", margin: "0.5rem auto"}}>
			I forgot to include the link to create post and the build command in Readme.md. Please clone this repo where I have included these: <a href="https://github.com/abhinavkrin/blog-assigment">https://github.com/abhinavkrin/blog-assigment</a>
		</p>
		</>
	)
}