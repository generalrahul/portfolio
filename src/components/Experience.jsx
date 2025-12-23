import React from 'react';
import Section from './Section';
import { cvData } from '../data/cv';

const Experience = () => {
    return (
        <Section id="experience" title="Experience">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {cvData.experience.map((exp, index) => (
                    <div key={index} className="glass" style={{ padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>{exp.company}</h3>
                            <span style={{ color: 'var(--text-secondary)' }}>{exp.duration}</span>
                        </div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{exp.role}</h4>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{exp.location}</p>
                        <ul style={{ paddingLeft: '1.5rem', color: '#ccc' }}>
                            {exp.details.map((detail, idx) => (
                                <li key={idx} style={{ marginBottom: '0.5rem' }}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
