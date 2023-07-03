import { useRef, useState, useEffect} from 'react';

const useObserver = () => {
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


    return [containerRef, isVisible];
}

export default useObserver;