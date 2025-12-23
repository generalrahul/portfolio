import React, { useState, useEffect } from 'react';
import '../index.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: '1rem 2rem',
            zIndex: 1000,
            background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
            transition: 'all 0.3s ease',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                Rahul<span className="gradient-text">Jha</span>
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
                {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                        {item}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
