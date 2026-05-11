import PropTypes from 'prop-types';
import Button from './Button';
import { content } from '../data/content';
import './OfferCard.scss';

export default function OfferCard({ offer }) {
    const { title, description, variant, theme, bgImage } = offer;
    return (
        <article
            className={`offer-card ${variant === 'wide' ? 'offer-card--wide' : ''}`.trim()}
            data-theme={theme}
            style={{ '--card-bg': `url(${bgImage})` }}
        >
            <div className="offer-card__body">
                <h3 className="offer-card__title">{title}</h3>
                <p className="offer-card__text">{description}</p>
            </div>
            <Button variant="outline" size="lg">
                {content.buttons.learn}
            </Button>
        </article>
    );
}

OfferCard.propTypes = {
    offer: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        variant: PropTypes.oneOf(['wide', 'default']).isRequired,
        theme: PropTypes.string.isRequired,
        bgImage: PropTypes.string.isRequired,
    }).isRequired,
};
