import { Button } from '@/components/ui/button';
import React from 'react';

const CatalogStatus = () => {
    return (
        <div className='flex justify-between items-center px-4 mt-4'>
            <h2 className='text-[#2D2D2D] text-2xl font-semibold'>Catalog Status </h2>
            <Button variant="default">Add New Catalog</Button>
        </div>
    );
};

export default CatalogStatus;