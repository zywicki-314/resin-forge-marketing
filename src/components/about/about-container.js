import AboutContent from "./about-content";
import AboutIntro from "./about-intro";
import style from "./about-container.module.css";

const AboutContainer = () => {
  return (
    <section className={style.aboutWr}>
      <AboutContent />
      <AboutIntro />
    </section>
  );
};

export default AboutContainer;
