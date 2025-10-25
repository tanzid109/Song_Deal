import React from 'react';

const PhoneAnimation = () => {
    return (
        <div>
            <div className="w-full h-42 rounded-md overflow-hidden shadow-md">
                <video
                    src="/animation/music.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    );
};

export default PhoneAnimation;