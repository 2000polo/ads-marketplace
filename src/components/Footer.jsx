import { Flex, IconButton, Text } from '@radix-ui/themes'
import React from 'react'
import { FaBehance, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo-dark.png';

const Footer = () => {
    return (
        <Flex gap={'2'} direction={{ initial: 'column', md: 'row' }} justify={"between"} align={"center"} className='px-2 lg:px-28 py-2 lg:py-6 shadow-lg bg-[#212121]'>
            <div className=" flex divide-x-2 gap-6 divide-pink-600 items-center ">
                <img width={'186px'} src={logo} />

                <Text className='text-white font-light pl-6' >Copyright 2024</Text>
            </div>

            <Flex align={"center"} gap={'4'}>
                <IconButton style={{ color: 'black', border: 'black' }} color='gray' variant='outline' radius='full' size={'3'} >
                    <FaFacebookF color='white' />
                </IconButton>
                <IconButton style={{ color: 'black', border: 'black' }} color='gray' variant='outline' radius='full' size={'3'} >
                    <FaTwitter color='white' />
                </IconButton>
                <IconButton style={{ color: 'black', border: 'black' }} color='gray' variant='outline' radius='full' size={'3'} >
                    <FaBehance color='white' />
                </IconButton>
                <IconButton style={{ color: 'black', border: 'black' }} color='gray' variant='outline' radius='full' size={'3'} >
                    <FaYoutube color='white' />
                </IconButton>
            </Flex>
        </Flex >
    )
}

export default Footer