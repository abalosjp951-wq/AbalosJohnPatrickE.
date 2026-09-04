import { SearchForm } from "../components/molecules/SearchForm";
import { HeritageGrid } from "../components/organisms/HeritageGrid";
import { HeaderNavigation } from "../components/organisms/HeaderNavigation";

export default function Home() {
  return (
    <main>
      <HeaderNavigation />
      <section className="hero">
        <div className="heroInner">
          <div className="heroCopy">
            <p className="eyebrow">PANGASINAN HERITAGE</p>
            <h1>Discover the stories behind <span>Pangasinan.</span></h1>
            <p>Explore iconic places, culture, and natural treasures through a fast, accessible digital showcase.</p>
            <div className="heroActions">
              <a className="btn" href="#sites">Explore Now</a>
              <a className="secondaryBtn" href="#about">About the Project</a>
            </div>
            <SearchForm />
          </div>
          <div className="heroVisual" aria-label="Pangasinan destination preview">
            <img src="https://www.ourpangasinan.com/wp-content/uploads/2023/02/hundred-islands-1.jpg" alt="Aerial view of Hundred Islands in Pangasinan" />
            <div className="heroBadge"><strong>3 featured sites</strong><span>Explore Pangasinan</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="sites">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">FEATURED DESTINATIONS</p>
            <h2>Places worth remembering</h2>
          </div>
          <p className="sectionIntro">Discover natural wonders and historic landmarks across the province.</p>
        </div>
        <HeritageGrid />
      </section>

      <section className="about" id="about">
        <div className="section aboutInner">
          <div>
            <p className="eyebrow">ABOUT THE SHOWCASE</p>
            <h2>Built for mobile-first exploration.</h2>
          </div>
          <p>This project demonstrates a modular, responsive, accessible tourism interface using reusable Atomic Design components.</p>
        </div>
      </section>

      <footer>© 2026 Pangasinan Heritage Digital Showcase</footer>
    </main>
  );
}
