import './styles/global.scss';
import { Header, Hero, OffersSection, Footer } from './components';

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <OffersSection />
            </main>
            <Footer />
        </>
    );
}
