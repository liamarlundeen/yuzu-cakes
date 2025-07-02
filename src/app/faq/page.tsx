import React from 'react';

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
        <main className="min-h-screen bg-[#f9f7f5] px-4 py-10 md:px-16 lg:px-48">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-black tracking-wide mb-12">FAQS</h1>
            <div className="space-y-16">
                {faqData.map((section) => (
                    <section key={section.section}>
                        <div className="border-t border-black mb-6" />
                        <div className="flex flex-col md:flex-row md:items-start mb-6">
                            <h2 className="text-lg md:text-xl font-bold text-black uppercase tracking-wider mb-6 md:mb-0 md:w-48 flex-shrink-0">
                                {section.section}
                            </h2>
                            <div className="space-y-8 md:ml-8 flex-1">
                                {section.items.map((item, i) => (
                                    <div key={i} className="">
                                        <div className="font-bold text-black mb-1">{item.q}</div>
                                        <div className="text-black text-sm md:text-base max-w-3xl">{item.a}</div>
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