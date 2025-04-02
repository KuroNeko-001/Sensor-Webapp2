import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './index.jsx'; // เปลี่ยนเป็น index.jsx

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index /> {/* เรนเดอร์ index.jsx */}
  </React.StrictMode>
);
