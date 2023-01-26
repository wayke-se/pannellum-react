import React from 'react';
import { createRoot } from 'react-dom/client';
import Pannellum from '.';

window.addEventListener('load', () => {
  const element = document.getElementById('root');
  if (element) {
    const root = createRoot(element);
    root.render(
      <Pannellum
        id={`react-pannellum`}
        panorama="./assets/360.jpg"
        hfov={120}
        autoLoad
        compass
        style={{
          width: '2000px',
          height: '1000px',
        }}
      />
    );
  }
});
