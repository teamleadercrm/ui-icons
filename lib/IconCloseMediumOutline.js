import React from 'react';
import Icon from '../IconBase';

const IconCloseMediumOutline = props =>
  <Icon viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        d="M12.5,11.5 L12.5,4 C12.5,3.724 12.276,3.5 12,3.5 C11.724,3.5 11.5,3.724 11.5,4 L11.5,11.5 L4,11.5 C3.724,11.5 3.5,11.724 3.5,12 C3.5,12.276 3.724,12.5 4,12.5 L11.5,12.5 L11.5,20 C11.5,20.276 11.724,20.5 12,20.5 C12.276,20.5 12.5,20.276 12.5,20 L12.5,12.5 L20,12.5 C20.276,12.5 20.5,12.276 20.5,12 C20.5,11.724 20.276,11.5 20,11.5 L12.5,11.5 Z"
        id="path-1"
      />
    </defs>
    <g id="Page-1" fill="none" fillRule="evenodd">
      <g id="24x24_close">
        <mask id="mask-2" fill="#fff">
          <use xlinkHref="#path-1" />
        </mask>
        <use id="icon" fill="#000" transform="rotate(45 12 12)" xlinkHref="#path-1" />
      </g>
    </g>
  </Icon>;

export default IconCloseMediumOutline;
