import React from 'react';

const Footer = () => {
  return (
    <footer style={{ marginTop: '40px', padding: '20px 0', textAlign: 'center', borderTop: '1px solid #ccc' }}>
      <p>© {new Date().getFullYear()} Nayana. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
