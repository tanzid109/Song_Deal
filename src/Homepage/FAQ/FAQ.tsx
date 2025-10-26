"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        {
            title: "About SongDeal",
            items: [
                {
                    q: "What Is SongDeal?",
                    a: "SongDeal is a global music investment platform that makes music catalogs transparent, data-rich, and investable, like a Bloomberg Terminal for music.",
                },
                {
                    q: "Who Is It For?",
                    a: "Rights holders (artists, labels, publishers), investors (institutional and retail), royalty processors and distributors, and financial and cultural institutions.",
                },
                {
                    q: "What Does SongDeal Offer?",
                    a: "Royalty analytics and catalog valuation, deal history, performance metrics, investment tools for music assets, and regional insights (global with expanding modules).",
                },
            ],
        },
        {
            title: "Sellers (Artists & Rights Holders)",
            items: [
                {
                    q: "What Is SongDeal For Me?",
                    a: "It’s a platform to list your music catalogs, make them investable, and gain visibility with potential buyers worldwide.",
                },
                {
                    q: "Can I List My Catalog?",
                    a: "Yes. Verified rights holders can onboard catalogs, get valuations, and attract investment interest.",
                },
                {
                    q: "How Is My Music Valued?",
                    a: "SongDeal uses AI-assisted analytics and royalty data to suggest a fair market value. You can also set your own price.",
                },
                {
                    q: "How Do I Make Money?",
                    a: "By selling shares of songs or catalogs, licensing music for media, or collaborating with other creators. Royalties and revenues are tracked and paid automatically.",
                },
                {
                    q: "Do I Retain Ownership?",
                    a: "Yes. Artists retain full rights not sold to investors and can continue external licensing or sales.",
                },
                {
                    q: "Is My Data Secure?",
                    a: "Yes. All data is permission-based, normalized, and verified through royalty processors and rights organizations.",
                },
            ],
        },
        {
            title: "Buyers (Investors)",
            items: [
                {
                    q: "How Can I Invest?",
                    a: "Investors can browse, evaluate, and invest in music catalogs with options for fractional ownership, syndication, and direct acquisition.",
                },
                {
                    q: "How Do I Earn Returns?",
                    a: "Investors receive a portion of royalties, licensing fees, and deal revenue proportional to their ownership.",
                },
                {
                    q: "Can I Resell My Shares?",
                    a: "Yes. Investors can resell shares on the platform, creating liquidity similar to secondary markets.",
                },
                {
                    q: "Is SongDeal Secure And Regulated?",
                    a: "Yes. The platform uses smart contracts, secure cloud storage, verified data, and secure transactions. It complies with global IP, financial, and data standards.",
                },
            ],
        },
        {
            title: "Platform & Payments",
            items: [
                {
                    q: "How Are Payments Handled?",
                    a: "All payouts are automated, secure, and delivered via bank transfer, PayPal, or digital wallets, depending on your region.",
                },
                {
                    q: "Are There Fees?",
                    a: "SongDeal charges a small service fee on completed transactions. Account creation and browsing are free.",
                },
                {
                    q: "Is SongDeal Global?",
                    a: "Yes. Our platform is designed for global use, with modular expansion into key regions such as Africa, Latin America, and Asia.",
                },
            ],
        },
        {
            title: "Capital & Partnerships",
            items: [
                {
                    q: "Is SongDeal Raising Capital?",
                    a: "Yes. Strategic investors aligned with our mission can contact us for pitch materials and roadmap access.",
                },
            ],
        },
        {
            title: "Support",
            items: [
                {
                    q: "How Do I Get Help?",
                    a: "Contact the Help Center in-app or email support@songdeal.com. Most inquiries are answered within 24 hours.",
                },
            ],
        },
    ];

    return (
        <section>
            <div className=" container max-w-5xl px-6 mx-auto">
                <h1 className="text-5xl font-bold text-center text-[#635BFF] tracking-widest mb-10 italic">
                    FAQ
                </h1>

                {sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800  mb-6">
                            {section.title}
                        </h2>

                        <div className="space-y-3">
                            {section.items.map((item, index) => {
                                const isOpen = openIndex === sectionIndex * 100 + index;
                                return (
                                    <div
                                        key={index}
                                        className="border-2 bg-white/70 border-gray-100  rounded-lg transition"
                                    >
                                        <button
                                            onClick={() => toggle(sectionIndex * 100 + index)}
                                            className="flex items-center justify-between w-full p-6"
                                        >
                                            <h3 className=" font-medium tracking-wide text-gray-800 text-[18px] text-left">
                                                {item.q}
                                            </h3>

                                            <span
                                                className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${isOpen
                                                        ? "bg-gray-200 text-gray-600"
                                                    : "bg-[#635BFF] text-white"
                                                    }`}
                                            >
                                                {isOpen ? (
                                                    <Minus className="w-5 h-5" />
                                                ) : (
                                                    <Plus className="w-5 h-5" />
                                                )}
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div className="border-t border-gray-200 ">
                                                <p className="p-6 text-black rounded-b-lg text-[17px] leading-relaxed">
                                                    {item.a}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
