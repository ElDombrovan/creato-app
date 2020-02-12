import React, { useState, useEffect } from "react";
import { Text } from "./Text.js";


export const Slider = ({ slides }) => {
    const { length } = slides;
    const [current, setCurrent] = useState(0);

    const goToNext = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        setTimeout(goToNext, 1000);
    }, [current]);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
      }

    return(
        <div class="Slider">
            
                { slides.map((slide, i) =>(
                    <section className="Slide" key={slide.title}>
                        <div className="Slide__info">
                            <Text className="Slide__info--location"> {slide.location} </Text>
                            <h2><Text className="Slide__info--title">{slide.title} </Text></h2>                        
                        </div>
                        <div className="Slide__content">
                            <img alt="{alt}" src="#"/>
                            <button>More info</button>
                        </div>
                    </section>
                ))}
            
        </div>
    );
};