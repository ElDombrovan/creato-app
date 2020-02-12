import React from "react";
//import { iconsConfig } from "../confgs/iconsConfigs.js";
import { Icon } from "./Icon.js";
import { IconsPanel } from "./IconsPanel.js";

export const Sidebar = () => {
    return(
        <div className="Sidebar">
            <div className="Sidebar__image--menu">
            <Icon name="menu"/>
            </div>
            <div className="Sidebar__image--logo">
                <img src="../public/icon_logo.png" alt="logo" />
            </div>
            <IconsPanel />
        </div>
    );
};