import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import './App.css';
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { useRef, useState, useEffect} from 'react';


const App = () => {

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(()=>{
    const observer = new IntersectionObserver(([entry])=>{

      console.log(entry);
      setIsVisible(entry.isIntersecting)
    })

    if(containerRef.current) {
      observer.observe(containerRef.current);
    } 

    return () => {
      if(containerRef.current) observer.unobserve(containerRef.current);
    }
  },[containerRef])

  return(
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Projects></Projects>
    <ContactMe></ContactMe>
    </>

    //
    // <>
    // <h1 style={{position:'fixed'}}>{isVisible ? 'Yes' : 'No'}</h1>
    // <div style={{height:'100vh'}} ref={containerRef}>
    //     <p style={{textAlign: 'center'}} >Hello</p>
    // </div>
    // <div style={{height:'100vh'}}>
    //     <p style={{textAlign: 'center'}}>goodbye</p>
    // </div>
    // </>
  )
}

export default App;