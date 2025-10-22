import React from "react";

export default function AboutSection() {
    return (
        <section className="w-full bg-background py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto space-y-10 text-foreground">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        About <span className="text-[#635BFF]">Song Deal</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Every song begins with inspiration—a story, a sound, a spark. Yet in today’s fast-changing music landscape,
                        many creators still struggle to turn that inspiration into opportunity.
                    </p>
                </div>

                <div className="space-y-4">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        <strong className="text-[#635BFF] font-bold">Song Deal</strong> was created to bridge that gap.
                        It’s a next-generation music-tech platform built to empower artists, songwriters, and music creators
                        worldwide.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        Our platform brings together music publishing, artist community, and AI innovation to help creators
                        understand the true value of their songs, connect with opportunities, and secure fair, data-driven deals.
                    </p>
                </div>

                <div className="space-y-4">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        Beyond empowering creators, Song Deal also supports labels, publishers, and music partners with clearer
                        insights, smarter discovery, and transparent collaboration tools.
                    </p>
                </div>

                <div className="space-y-4 border-l-4 border-primary pl-6">
                    <p className="text-xl font-medium text-foreground italic bg-yellow-400 p-1 border-black border-b-4">
                        “At Song Deal, we believe that every song is more than just a sound. It’s an asset.”
                    </p>
                    <p className="text-lg text-muted-foreground">
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
