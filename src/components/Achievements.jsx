import React from 'react';
import Section from './Section';
import { cvData } from '../data/cv';

const Achievements = () => {
    return (
        <Section id="achievements" title="Achievements">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {cvData.achievements.map((item, index) => (
                    <div key={index} className="glass" style={{
                        padding: '1.5rem',
                        borderLeft: '4px solid var(--accent-secondary)'
                    }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Achievements;
