import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AdminLayout({children}){
	return (
		<>
			<Header/>
			<main style={{display: "flex", justifyContent: "center"}}>
				{children}
			</main>
			<Footer/>
		</>
	)
}