import { FooterSection } from "./components/footer";
import { Header } from "./components/header";
import { AboutMe } from "./components/Sections/aboutMeSection/index";
import { Banner } from "./components/Sections/bannerSection/index";
import { ProjectSection } from "./components/Sections/projectsSection";
import { TechSection } from "./components/Sections/techSection/index";

function App() {
  return (
    <>
      <Header />

      <main>
        <Banner />
        <AboutMe />
        <TechSection />
        <ProjectSection />
      </main>

      <FooterSection />
    </>
  );
}

export default App;
