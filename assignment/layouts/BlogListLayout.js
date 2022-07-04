import Footer from "../components/Footer";
import Header from "../components/Header";

export default function BlogListLayout({children}){
	return (
		<>
			<Header/>
			<main className="container">
				{children}
			</main>
			<Footer/>
		</>
	)
}