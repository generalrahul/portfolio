import React from 'react';

const Section = ({ id, title, children }) => {
    return (
        <section id={id} style={{ padding: '6rem 1rem' }}>
            <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '3rem',
                display: 'inline-block',
                borderBottom: '2px solid var(--accent-primary)',
                paddingBottom: '0.5rem'
            }}>
                {title}
            </h2>
            <div className="section-content">
                {children}
            </div>
        </section>
    );
};

export default Section;
