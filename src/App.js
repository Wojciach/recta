import logo from './logo.svg';
import './App.css';
import './base.scss';
import Header from "./Header.js";
import Menu from "./Menu.js";
import Services from "./Services.js";
import CompanyDescription from './CompanyDescription';
import Opinions from "./Opinions.js";
import Projects  from './Projects.js';
import News from './News';

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

    </main>
  );
}

export default App;
