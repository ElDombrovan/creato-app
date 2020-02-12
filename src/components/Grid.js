import React from "react";
import { Slider } from "./Slider.js";
import { Sidebar } from "./Sidebar.js";
import slidesConfig  from "../confgs/slidesConfig.js";

export const Grid = () => {
    return(
        <div class="Grid">
            <Slider slides={slidesConfig}/>
            <Sidebar />
        </div>
    );
};