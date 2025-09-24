import React from 'react';
import './App.scss';
import { offers, content } from './constants';
import earthImg from './img/EARTH.webp';
import { GroupLogoIcon, RocketIcon, BinIcon, BinHoverIcon } from './constants/icons';

export default function App() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const toggleMenu = () => setMenuOpen((v) => !v);
    const closeMenu = () => setMenuOpen(false);
    return (
        <div>
            {/* Header */}
            <header className={`header ${menuOpen ? 'is-open' : ''}`}>
                <div className="container header__inner">
                    <a href="#home" className="header__logo" onClick={closeMenu}>
                        <GroupLogoIcon className="header__logo-img" aria-hidden="true" focusable="false" />
                    </a>
                    <nav className="header__menu" aria-label="menu">
                        <div className="header__nav">
                            <a className="header__link" href="#features" onClick={closeMenu}>
                                {content.menu.home}
                            </a>
                            <a className="header__link" href="#pricing" onClick={closeMenu}>
                                {content.menu.product}
                            </a>
                            <a
                                className="header__link header__link--bin"
                                href="#about"
                                onClick={closeMenu}
                                aria-label="Bin"
                            >
                                <span className="sr-only">Bin</span>
                                <BinIcon className="header__link-icon" aria-hidden="true" focusable="false" />
                                <BinHoverIcon
                                    className="header__link-icon header__link-icon--hover"
                                    aria-hidden="true"
                                    focusable="false"
                                />
                            </a>
                        </div>
                    </nav>
                    <button
                        aria-label="Меню"
                        aria-expanded={menuOpen}
                        className="header__burger"
                        type="button"
                        onClick={toggleMenu}
                    >
                        <span className="header__icon" />
                    </button>
                </div>
            </header>
            {/* Hero */}
            <main>
                <section className="hero" id="home">
                    <div className="container hero__grid">
                        <div>
                            <h1 className="hero__title">{content.title.title}</h1>
                            <p className="hero__text">{content.title.descr}</p>
                            <button className="hero__cta" type="button">
                                {content.buttons.learn}
                            </button>
                        </div>
                        <img className="hero__image" src={earthImg} alt="Planet Earth" />
                    </div>
                </section>
                <section className="offers" id="offers">
                    <div className="container offers__inner">
                        <div className="offers__header">
                            <h2 className="offers__title">{content.menu.offers}</h2>
                        </div>
                        <div className="offers__grid">
                            {offers.map((offer) => (
                                <article
                                    key={offer.id}
                                    className={`offer-card offer-card--${offer.theme} ${offer.variant === 'wide' ? 'offer-card--wide' : ''}`.trim()}
                                    style={{
                                        backgroundImage: `url(${offer.bgImage})`,
                                    }}
                                >
                                    <div className="offer-card__body">
                                        <h3 className="offer-card__title">{offer.title}</h3>
                                        <p className="offer-card__text">{offer.description}</p>
                                    </div>
                                    <button className="offer-card__cta" type="button">
                                        {content.buttons.learn}
                                    </button>
                                </article>
                            ))}
                        </div>
                        <article className="offers__story">
                            <div className="offers__story-body">
                                <h3 className="offers__story-title">{content.description.title}</h3>
                                <p className="offers__story-text">{content.description.descr}</p>
                            </div>
                            <a className="offers__story-link" href="#read-more">
                                {content.buttons.read}
                            </a>
                        </article>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <footer className="footer">
                <div className="offers__footnote">
                    <RocketIcon className="offers__footnote-image" aria-hidden="true" focusable="false" />
                    <span>{content.buttons.adventure}</span>
                </div>
            </footer>
        </div>
    );
}
