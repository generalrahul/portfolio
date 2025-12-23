import React from 'react';
import { cvData } from '../data/cv';

const Hero = () => {
    return (
        <section id="about" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: '60px'
        }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                Hi, I'm <span className="gradient-text">{cvData.personalInfo.name}</span>
            </h1>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                {cvData.personalInfo.title}
            </h2>
            <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: '#ccc', marginBottom: '2rem' }}>
                {cvData.personalInfo.summary}
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#contact" className="btn">Get in Touch</a>
                <a href={cvData.personalInfo.github} target="_blank" rel="noopener noreferrer"
                    style={{
                        padding: '0.75rem 1.5rem',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.05)'
                    }}>
                    GitHub
                </a>
            </div>
        </section>
    );
};

export default Hero;
