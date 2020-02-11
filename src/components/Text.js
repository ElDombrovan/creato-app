import React, { Fragment } from "react";
import { textComponentPropTypes } from "../confgs/propTypesConfig.js";

export const Text = ({children}) => {
    return(
        <Fragment>
            <span class="Text"> {children} </span>
        </Fragment>
    );
};

Text.propTypes = textComponentPropTypes;