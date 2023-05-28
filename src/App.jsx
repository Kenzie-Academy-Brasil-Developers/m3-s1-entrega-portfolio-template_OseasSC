import { FooterSection } from "./components/footer";
import { Header } from "./components/header";
import { AboutMe } from "./components/Sections/aboutMeSection/index";
import { Banner } from "./components/Sections/bannerSection/index";
import { ProjectSection } from "./components/Sections/projectsSection";
import { TechSection } from "./components/Sections/techSection/index";
import "./styles/app.css";

function App() {
  return (
    <div className="container">
      <Header />

      <main>
        <Banner />
        <AboutMe />
        <TechSection />
        <ProjectSection />
      </main>

      <FooterSection />
    </div>
  );
}

export default App;
