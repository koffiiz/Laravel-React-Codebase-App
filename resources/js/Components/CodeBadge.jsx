import React, {  useEffect, useRef } from 'react';

export default function CodeBadge({
    code,
    text,
    children
}) {

    var badgeColor = 'bg-gray-600'

    switch(code) {
      case 'js': 
        badgeColor = 'bg-yellow-500'
        break;
      case 'css': 
        badgeColor = 'bg-red-600'
        break;
      case 'liquid': 
        badgeColor = 'bg-blue-500'
        break;
      case 'php': 
        badgeColor = 'bg-gray-900'
        break;
    }

    return (
      <span className={`${badgeColor} text-white py-1 px-4 rounded-full text-xs font-bold`}> {children} </span>
    );
}
