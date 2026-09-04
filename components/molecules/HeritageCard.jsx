import { Icon } from "../atoms/Icon";

export function HeritageCard({ name, location, description, image, href }) {
  return (
    <article className="card">
      <div className="cardVisual">
        <img src={image} alt={`${name} in Pangasinan`} loading="lazy" />
        <span className="imageLabel"><Icon label="destination icon">📍</Icon>{location}</span>
      </div>
      <div className="cardBody">
        <span className="tag">{location}</span>
        <h3>{name}</h3>
        <p>{description}</p>
        <a className="cardLink" href={href} target="_blank" rel="noreferrer">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
