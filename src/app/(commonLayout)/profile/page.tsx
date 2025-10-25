import ArtistProfileForm from '@/Profile/ArtistProfile';
import InvestorProfileForm from '@/Profile/InvestorProfile';
import React from 'react';

const page = () => {
    return (
        <div>
            <ArtistProfileForm/>
            <InvestorProfileForm/>
        </div>
    );
};

export default page;