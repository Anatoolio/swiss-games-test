import { content } from "../data/content";
import Button from "./Button";
import "./EmbarkSection.scss";

export default function EmbarkSection() {
  return (
    <article className="embark" aria-labelledby="embark-title">
      <div className="embark__body">
        <h3 id="embark-title" className="embark__title">
          {content.embark.title}
        </h3>
        <p className="embark__text">{content.embark.body}</p>
      </div>
      <Button as="a" variant="link" href="#read-more">
        {content.buttons.read}
      </Button>
    </article>
  );
}
