import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import './App.css';
import Projects from "./components/Projects";


const App = () => {
  return(
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Projects></Projects>
    </>
  )
}

export default App;