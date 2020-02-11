import T from "prop-types";

export const iconsConfigPropTypes = {
    name: T.string.isRequired,
};

export const textComponentPropTypes = {
    children: T.oneOfType([T.string, T.node, T.arrayOf(T.node)]).isRequired,
};