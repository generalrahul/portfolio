import React from 'react';
import Section from './Section';
import { cvData } from '../data/cv';

const SkillCategory = ({ title, skills }) => (
    <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>{title}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {skills.split(', ').map((skill, index) => (
                <span key={index} style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                }}
                    onMouseEnter={(e) => {
                        e.target.style.borderColor = 'var(--accent-primary)';
                        e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.borderColor = 'var(--glass-border)';
                        e.target.style.background = 'rgba(255,255,255,0.05)';
                    }}
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    return (
        <Section id="skills" title="Skills">
            <div className="glass" style={{ padding: '2rem' }}>
                <SkillCategory title="Programming Languages" skills={cvData.skills.programming} />
                <SkillCategory title="Frameworks & Libraries" skills={cvData.skills.frameworks} />
                <SkillCategory title="Tools & Technologies" skills={cvData.skills.tools} />
                <SkillCategory title="Interests" skills={cvData.interests} />
            </div>
        </Section>
    );
};

export default Skills;
