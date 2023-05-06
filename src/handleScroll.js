

const hadnleScroll = ([viz, setViz]) => {


    console.log("/////scroll///////")

    const sections = document.querySelectorAll('section');
    
    for (let i = sections.length - 1; i >= 0; i--) {

      const section = sections[i];

      const rect = section.getBoundingClientRect();
      

      const isVisible = () => {
        if ((rect.top < window.innerHeight * 0.8 ) && (rect.top > 0)) {

       //    console.log("FIRST CONDITION: "); 
           return true}

        else if (((rect.bottom > window.innerHeight * 0.25) && (rect.top < window.innerHeight * 0.8)) && (rect.bottom > 0)) {

        //  console.log("SECOND CONDITION: ");
          return true}

        else {return false}
      };

      //console.log(isVisible());

     if (isVisible() === true)  {

      //   viz.current.add(section.id); // this line is for useRef
        
      setViz((prevViz) => {
        const newViz = new Set(prevViz);
        newViz.add(section.id);
        return newViz;
      });
        
      
      }
      else {

      //    viz.current.delete(section.id); // this line is for useRef
        
      setViz((prevViz) => {
        const newViz = new Set(prevViz);
        newViz.delete(section.id);
        return newViz;
      });
      
      };
     /* if ((rect.top < window.scrollY) && (rect.top > (window.scrollY - window.innerHeight))) {
        console.log(section);
      } */
    }
  
    viz.forEach((t) => console.log(t));

} 

export default hadnleScroll;