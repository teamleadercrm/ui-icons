import React from 'react';
import PropTypes from 'prop-types';

const IconBase = ({ children, color, size, style, width, height, opacity, ...props }) => {
  const computedSize = size || '1em';
  return (
    <svg
      children={children}
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      height={height || computedSize}
      width={width || computedSize}
      {...props}
      style={{
        opacity: opacity || '0.84',
        verticalAlign: 'middle',
        color,
        ...style,
      }}
    />
  );
};

IconBase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  opacity: PropTypes.number,
  style: PropTypes.object,
};

export default IconBase;
