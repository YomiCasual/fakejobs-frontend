import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import '../styles/globals.css';
import '../styles/Animation.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<main className='main'>
				<Navbar />
				<Component {...pageProps} />
        <Footer />
			</main>
		</>
	);
}

export default MyApp;
