import React from "react";
import { iconsConfig } from "../confgs/iconsConfig.js";
import { iconsConfigPropTypes } from "../confgs/propTypesConfig.js";

export const Icon = ({name, ...props}) => {
    const IconComponent = iconsConfig[name];
    return <IconComponent {...props} />;
};

Icon.propTypes = iconsConfigPropTypes;
