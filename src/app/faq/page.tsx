import React from 'react';
import '../styles/faq.css';

const faqData = [
    {
        section: 'GENERAL',
        items: [
            { q: 'QUESTION', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' },
            { q: 'QUESTION', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' },
            { q: 'QUESTION', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' },
        ],
    },
    {
        section: 'PICK-UP',
        items: [
            { q: 'QUESTION', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' },
            { q: 'QUESTION', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' },
            { q: 'QUESTION', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' },
        ],
    },
    {
        section: 'CAKE STORAGE',
        items: [
            { q: 'QUESTION', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' },
            { q: 'QUESTION', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' },
            { q: 'QUESTION', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' },
        ],
    },
    {
        section: 'OTHER',
        items: [
            { q: 'QUESTION', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' },
            { q: 'QUESTION', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' },
            { q: 'QUESTION', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' },
        ],
    },
];

export default function FAQ() {
    return (
        <main className="faq-container">
            <h1 className="faq-title">FAQS</h1>
            <div>
                {faqData.map((section) => (
                    <section key={section.section} className="faq-section">
                        <div className="section-divider" />
                        <div className="section-container">
                            <h2 className="section-header">
                                {section.section}
                            </h2>
                            <div className="questions-container">
                                {section.items.map((item, i) => (
                                    <div key={i} className="question-item">
                                        <div className="question">{item.q}</div>
                                        <div className="answer">{item.a}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}