
import './App.css';
import Contact from './componenets/Contact';
import Hero from './componenets/Hero';
import Nav from './componenets/Nav';
import Projects from './componenets/Projects';
import Skills from './componenets/Skills';
import { Helmet } from 'react-helmet';
import Preview from './assets/preview.png'
function App() {
  return (
    <>
    <Helmet>
    <meta property='og:image' content={Preview}/>
            </Helmet>
    <Nav/>
    <Hero/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
