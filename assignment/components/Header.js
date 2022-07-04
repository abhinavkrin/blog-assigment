import Link from "next/link";

export default function Header({}){
	return (
		<header>
			<div style={{padding: "0.5rem 1rem"}}>Blog Website</div>
			<Link href="/" >
				<a style={{padding: "0.5rem 1rem"}}>Home</a>
			</Link>
			<Link href="/admin">
				<a style={{padding: "0.5rem 1rem"}}>Dashboard</a>
			</Link>
		</header>
	)
}