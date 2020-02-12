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
    });

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
      }

    return(
        <div class="Slider">
            <section>
                { slides.map((slide, i) =>(
                    <div key={slide.title}>
                        <Text> {slide.location} </Text>
                        <Text>{slide.title} </Text>
                    </div>
                ))}
            </section>
        </div>
    );
};