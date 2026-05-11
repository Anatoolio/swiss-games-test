import { useState, useCallback } from 'react';
import { content } from '../data/content';
import { GroupLogoIcon, CartIcon, CartHoverIcon } from '../icons';
import useMenuControls from '../hooks/useMenuControls';
import './Header.scss';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const close = useCallback(() => setMenuOpen(false), []);
    const menuRef = useMenuControls(menuOpen, close);

    return (
        <header className={`header ${menuOpen ? 'is-open' : ''}`} ref={menuRef}>
            <div className="container header__inner">
                <a href="#home" className="header__logo" onClick={close} aria-label="Swiss Games — home">
                    <GroupLogoIcon className="header__logo-img" aria-hidden="true" focusable="false" />
                </a>
                <nav className="header__menu" aria-label="Primary">
                    <ul className="header__nav">
                        <li>
                            <a className="header__link" href="#home" onClick={close}>
                                {content.menu.home}
                            </a>
                        </li>
                        <li>
                            <a className="header__link" href="#offers" onClick={close}>
                                {content.menu.product}
                            </a>
                        </li>
                        <li>
                            <a
                                className="header__link header__link--cart"
                                href="#cart"
                                onClick={close}
                                aria-label={content.menu.cart}
                            >
                                <CartIcon className="header__link-icon" aria-hidden="true" focusable="false" />
                                <CartHoverIcon
                                    className="header__link-icon header__link-icon--hover"
                                    aria-hidden="true"
                                    focusable="false"
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
                <button
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="primary-menu"
                    className="header__burger"
                    type="button"
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    <span className="header__icon" aria-hidden="true" />
                </button>
            </div>
        </header>
    );
}

