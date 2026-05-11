import { content } from '../data/content';
import earthImg from '../img/EARTH.webp';
import Button from './Button';
import './Hero.scss';

export default function Hero() {
    const { title, text } = content.hero;
    return (
        <section className="hero" id="home">
            <div className="container hero__layout">
                <div className="hero__content">
                    <h1 className="hero__title">
                        {title.before}
                        <span className="hero__title-accent">{title.accent}</span>
                    </h1>
                    <p className="hero__text">
                        {text.before}
                        <span className="hero__text-accent">{text.accent}</span>
                    </p>
                    <Button variant="primary" size="lg">
                        {content.buttons.learn}
                    </Button>
                </div>
                <img className="hero__image" src={earthImg} alt="" aria-hidden="true" />
            </div>
        </section>
    );
}
