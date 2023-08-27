import { useState, useEffect } from "react";
import Button from "./buttons/Button";

export const TopScrollBtn = () => {

    const [visibility, setVisibility] = useState(0);

    const style = {
        visibility: "visible",
        transition: "opacity 0.7s ease-in-outm",
        opacity: visibility
    };

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }

    useEffect(() => {
        function handleVisibility() {
          window.scrollY > window.innerHeight/2 ? setVisibility(1) : setVisibility(0);
        }

        window.addEventListener('scroll', handleVisibility);

        return () => {
          window.removeEventListener('scroll', handleVisibility);
        };
    }, []);


    return (
        <div style={style} id="top-scroller"> 
            <Button onClick={scrollToTop} angle={90} /> 
        </div>
    );
  }
//style={{backgroundColor:"grey", width:"35px", height:"35px"}}