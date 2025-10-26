import React from "react";
export default function AboutSection() {
    return (
        <section className="w-full bg-background py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto space-y-10 text-foreground">
                <div className="space-y-4">
                    <h2 className="text-3xl text-[#635BFF] md:text-5xl font-bold tracking-tight text-center">
                        SongDeal
                    </h2>
                    <p className="text-lg text-gray-800 leading-relaxed">
                        Every song begins with inspiration a story, a sound, a spark. Yet in today’s fast-changing music landscape,many creators still struggle to turn that inspiration into opportunity.<strong>SongDeal</strong> was created to bridge that gap.
                        It’s a next-generation music-tech platform built to empower artists, songwriters, and music creators
                        worldwide.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-800">
                        Our platform brings together music publishing, artist community, and AI innovation to help creators understand the true value of their songs, connect with opportunities, and secure fair, data-driven deals.Beyond empowering creators, <strong>SongDeal</strong> also supports labels, publishers, and music partners with clearer insights, smarter discovery, and transparent collaboration tools.
                    </p>
                </div>
                <div className="space-y-4 border-l-4 border-primary pl-6">
                    <h2 className="text-xl font-medium text-foreground italic bg-yellow-400 p-1 border-black border-b-4">
                        “At SongDeal, we believe that every song is more than just a sound. It’s an asset.”
                    </h2>
                    <p className="text-lg text-gray-800">
                        Every song deserves a chance to shine, and every creator deserves to win.
                    </p>
                    <p className="text-lg font-semibold text-primary">
                        We’re shaping the future of music, one song deal at a time.
                    </p>
                </div>
            </div>
        </section>
    );
}
