import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem',
            textAlign: 'center',
            borderTop: '1px solid var(--glass-border)',
            marginTop: '4rem',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
        }}>
            <p>Designed & Built by Rahul Jha</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.7 }}>
                © {new Date().getFullYear()} All Rights Reserved
            </p>
        </footer>
    );
};

export default Footer;
