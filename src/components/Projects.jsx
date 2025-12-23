import React from 'react';
import Section from './Section';
import { cvData } from '../data/cv';

const Projects = () => {
    return (
        <Section id="projects" title="Projects">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {cvData.projects.map((project, index) => (
                    <div key={index} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--accent-secondary)' }}>
                            {project.title.split('|')[0]}
                        </h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            {project.title.split('|')[1]}
                        </p>
                        <div style={{
                            marginBottom: '1rem',
                            fontSize: '0.85rem',
                            color: 'var(--accent-primary)',
                            border: '1px solid var(--glass-border)',
                            padding: '0.5rem',
                            borderRadius: '4px',
                            display: 'inline-block'
                        }}>
                            {project.techStack}
                        </div>
                        <ul style={{ paddingLeft: '1.2rem', color: '#ccc', fontSize: '0.95rem' }}>
                            {project.details.map((detail, idx) => (
                                <li key={idx} style={{ marginBottom: '0.5rem' }}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
