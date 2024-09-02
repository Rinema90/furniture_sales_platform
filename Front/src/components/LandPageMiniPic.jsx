import React from "react";
import PropTypes from "prop-types";

const LandPageMiniPic = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="block h-[20em] w-[20em] rounded-lg object-cover object-center"
    />
  );
};

LandPageMiniPic.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LandPageMiniPic;
