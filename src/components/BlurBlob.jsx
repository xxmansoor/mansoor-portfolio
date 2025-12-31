// components/BlurBlob.jsx
import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({ position = { top: "50%", left: "50%" }, size = { width: "200px", height: "200px" }, color = "#8245ec", opacity = 0.2 }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        top,
        left,
        width,
        height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="w-full h-full rounded-full blur-3xl animate-blob"
        style={{
          backgroundColor: color,
          opacity: opacity,
        }}
      ></div>
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  color: PropTypes.string,
  opacity: PropTypes.number,
};

export default BlurBlob;
