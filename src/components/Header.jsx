import { Button, Flex } from '@radix-ui/themes'
import React from 'react'
import { GoArrowRight } from 'react-icons/go';
import logo from '../assets/logo.png';
import { FaRegUser } from 'react-icons/fa';

const Header = () => {
    return (
        <Flex justify={"between"} align={"center"} className='px-2 lg:px-28 py-2 lg:py-6 shadow-lg'>
            <img className='w-24 md:w-fit' src={logo} />

            <Flex align={"center"} gap={'4'}>
                <Button variant='ghost' color='gray' size={{ initial: '2', md: '3' }} highContrast> <FaRegUser /> Sign In</Button>
                <Button radius='full' size={{ initial: '2', md: '3' }} variant='solid'>
                    Post Your Ad
                    <GoArrowRight />
                </Button>
            </Flex>
        </Flex >
    )
}

export default Header;