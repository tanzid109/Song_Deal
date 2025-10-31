"use client";
import React, { useState } from "react";
import { Plus, Minus, ArrowRightIcon, ArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [showAll, setShowAll] = useState(false);

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
                    a: (
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Rights holders (artists, labels, publishers)</li>
                            <li>Investors (institutional and retail)</li>
                            <li>Royalty processors and distributors</li>
                            <li>Financial and cultural institutions</li>
                        </ul>
                    ),
                },
                {
                    q: "What Does SongDeal Offer?",
                    a: (
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Royalty analytics and catalog valuation</li>
                            <li>Deal history and performance metrics</li>
                            <li>Investment tools for music assets</li>
                            <li>Regional insights (Global, with expanding modules)</li>
                        </ul>
                    ),
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
                    a: (
                        <p>
                            Contact the Help Center in-app or email{" "}
                            <Link
                                href="mailto:support@songdeal.com?subject=Support%20Request"
                                className="text-[#635BFF] underline hover:text-[#5145CD] font-semibold"
                            >
                                support@songdeal.com
                            </Link>
                            . Most inquiries are answered within 24 hours.
                        </p>
                    ),
                },
            ],
        }
    ];

    const visibleSections = showAll ? sections : sections.slice(0, 2);

    return (
        <section className="font-['Times_New_Roman']">
            <div className="container max-w-5xl px-6 mx-auto">
                <h1 className="text-2xl font-bold text-center text-black tracking-wide mb-10">
                    FAQ
                </h1>

                {visibleSections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-10">
                        <h2 className="text-xl tracking-wide font-bold text-gray-800 mb-6">
                            {section.title}
                        </h2>

                        <div className="space-y-3">
                            {section.items.map((item, index) => {
                                const isOpen = openIndex === sectionIndex * 100 + index;
                                return (
                                    <div
                                        key={index}
                                        className="border-2 bg-white/70 border-gray-100 rounded-lg transition"
                                    >
                                        <button
                                            onClick={() => toggle(sectionIndex * 100 + index)}
                                            className="flex items-center justify-between w-full p-6"
                                        >
                                            <h3 className="font-medium tracking-wide text-gray-800 text-lg text-left">
                                                {item.q}
                                            </h3>

                                            <span
                                                className={`flex items-center justify-center w-7 h-7 rounded-full transition-colors ${isOpen
                                                        ? "bg-gray-300 text-gray-800"
                                                        : "bg-[#635BFF] text-white"
                                                    }`}
                                            >
                                                {isOpen ? (
                                                    <Minus className="w-4 h-4" />
                                                ) : (
                                                    <Plus className="w-4 h-4" />
                                                )}
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div className="border-t border-gray-200">
                                                <div className="p-6 text-black rounded-b-lg text-[16px] leading-relaxed tracking-wide">
                                                    {item.a}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                <div className="text-center my-8">
                    <Button
                        variant="secondary"
                        onClick={() => setShowAll(!showAll)}
                        className="gap-2"
                    >
                        {showAll ? (
                            <>
                                Show Less <ArrowUpIcon className="h-4 w-4" />
                            </>
                        ) : (
                            <>
                                View All <ArrowRightIcon className="h-4 w-4" />
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
