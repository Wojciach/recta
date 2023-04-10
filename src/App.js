import logo from './logo.svg';
import './App.css';
import './base.scss';
import Header from "./Header.js";
import Menu from "./Menu.js";
import Services from "./Services.js";
import CompanyDescription from './CompanyDescription';
import Opinions from "./Opinions.js";
import Projects  from './Projects.js';
import News from './News.js';
import ContactForm from './ContactForm.js';
import Map from './Map.js'
import Footer from './Footer';


function App() {
  return (
    <main className="App">
      <header>
        <Menu />
        <Header />
      </header>
        <Services />
        <CompanyDescription />
        <Opinions />
        <Projects />
        <News />
        <ContactForm />
        <Map />
      <footer>
        <Footer />
      </footer>
        
    </main>
  );
}

export default App;
