import React from 'react';
import WorkCard from './WorkCard';
import Analytics from './Analytics';

const Works = () => {
    return (
        <div className='w-11/12 mx-auto bg-white py-10'>
            <WorkCard/>
            <Analytics/>
        </div>
    );
};

export default Works;