import React from "react";

export default function AboutSection() {
    return (
        <section className="w-full bg-background py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto space-y-10 text-foreground">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-center">
                        About <span className="text-[#635BFF]">SongDeal</span>
                    </h2>
                    <p className="text-lg text-center">
                        Every song begins with inspiration—a story, a sound, a spark. Yet in today’s fast-changing music landscape, many creators still struggle to turn that inspiration into opportunity. SongDeal was created to bridge that gap. It’s a next-generation music-tech platform built to empower artists, songwriters, and music creators worldwide. Our platform combines music publishing, a vibrant artist community, and cutting-edge AI to help creators understand the true value of their songs, connect with new opportunities, and secure fair, data-driven deals. 
                        
                    </p>
                    <p className="text-lg text-center">Beyond empowering creators, SongDeal also supports labels, publishers, and music partners with clearer insights, smarter discovery, and transparent collaboration tools. <span className="text-[#635BFF] font-semibold">At SongDeal, we believe that every song is more than just a sound—it’s an asset.</span> Every song deserves a chance to shine, and every creator deserves to win. We’re shaping the future of music, one song deal at a time.</p>
                </div>
            </div>
        </section>
    );
}
