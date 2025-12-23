import React from 'react';
import Section from './Section';
import { cvData } from '../data/cv';

const Education = () => {
    return (
        <Section id="education" title="Education">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {cvData.education.map((edu, index) => (
                    <div key={index} className="glass" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{edu.institution}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{edu.degree}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontWeight: 'bold', color: 'var(--accent-primary)' }}>{edu.year}</div>
                            <div style={{ fontSize: '0.9rem', color: '#ccc' }}>{edu.location}</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{edu.score}</div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
