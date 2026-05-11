import { content } from "../data/content";
import { RocketIcon } from "../icons";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__banner">
        <RocketIcon
          className="footer__icon"
          aria-hidden="true"
          focusable="false"
        />
        <span>{content.buttons.adventure}</span>
      </div>
    </footer>
  );
}
