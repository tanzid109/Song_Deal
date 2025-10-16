import { songs } from '@/Database/Songs';
import SongCard from '@/Shared/Song_Card';
import React from 'react';

const FeaturedSongs = () => {
    return (
        <div>
            <SongCard songs={songs}/>
        </div>
    );
};

export default FeaturedSongs;