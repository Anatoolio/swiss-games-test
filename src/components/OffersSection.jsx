import { offers } from '../data/offers';
import { content } from '../data/content';
import OfferCard from './OfferCard';
import EmbarkSection from './EmbarkSection';
import './OffersSection.scss';

export default function OffersSection() {
    return (
        <section className="offers" id="offers" aria-labelledby="offers-title">
            <div className="container offers__inner">
                <h2 id="offers-title" className="offers__title">
                    {content.menu.offers}
                </h2>
                <div className="offers__grid">
                    {offers.map((offer) => (
                        <OfferCard key={offer.id} offer={offer} />
                    ))}
                </div>
                <EmbarkSection />
            </div>
        </section>
    );
}
