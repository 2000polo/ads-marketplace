import { Box, Card, IconButton, Inset, Strong, Text } from '@radix-ui/themes'
import React from 'react'
import { GoDotFill } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';

const ProductCardSm = () => {
    return (
        <div
            className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-lg flex flex-col justify-between leading-normal">
            <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" className="w-full mb-0 rounded-t-lg" />
            <div className="p-4">
                <div className="mb-4 text-gray-500 text-left">
                    <div className="flex items-center gap-1 text-sm">
                        <p>Paris</p>
                        <GoDotFill fontSize={8} className='text-gray-400' />
                        <p>1 day ago</p>
                    </div>
                    <a href="#" className="text-gray-900 font-bold text-sm md:text-lg mb-2 hover:text-[#F50963] inline-block">Tx9 Pro Smart Tv Box 8/128gb
                        Best Price: Urgent</a>
                </div>
                <div className="flex items-center justify-between">
                    <Text size={'4'} className='font-medium text-[#F50963]'>$499</Text>
                    <IconButton style={{ color: 'black', border: 'black' }} color='gray' variant='outline' radius='full' size={'3'} >
                        <IoEyeOutline />
                    </IconButton>
                </div>
            </div>
        </div>

    )
}

export default ProductCardSm;