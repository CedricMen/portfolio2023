import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const handleMouseMove = (e) => {
      cursor.setAttribute("style", `top: ${e.pageY - window.scrollY}px; left: ${e.pageX}px`);
    };

    const handleClick = () => {
      cursor.classList.add("expand");

      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;