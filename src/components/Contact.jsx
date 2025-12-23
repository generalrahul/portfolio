import React from 'react';
import Section from './Section';
import { cvData } from '../data/cv';

const Contact = () => {
    return (
        <Section id="contact" title="Get In Touch">
            <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#ccc' }}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <a href={`mailto:${cvData.personalInfo.email}`} className="btn">
                        Say Hello
                    </a>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                        <span>{cvData.personalInfo.email}</span>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
