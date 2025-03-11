// app/page.js
import styles from "./hero.module.css";
import Navbar from "./components/Navbar";
import VideoPromo from "./components/Herovideo";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>Prominent Premier Partners</h1>
          <p className={styles.subtitle}>
            P3 represents nearly 100 banks and data centers from across the
            country with assets in excess of One Billion Dollars. Our primary
            purpose is to facilitate the exchange of ideas, techniques and
            information to more effectively utilize Fiserv Premier products and
            services.
          </p>
          <button className={styles.cta}>Sign Up</button>
          <button className={styles.cta2}>Learn More</button>
        </div>
      </div>
      <VideoPromo />
      <Announcement />
      <Footer />
    </div>
  );
}
