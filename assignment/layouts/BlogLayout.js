import Footer from "../components/Footer";
import Header from "../components/Header";

export default function BlogLayout({children}){
	return (
		<>
			<Header/>
			<main>
				{children}
			</main>
			<Footer/>
		</>
	)
}