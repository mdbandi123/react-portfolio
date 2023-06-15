import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import './App.css';
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";


const App = () => {
  return(
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <ContactMe></ContactMe>
    </>
  )
}

export default App;