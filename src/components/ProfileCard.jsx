import { Avatar, Box, Button, Card, Flex, Text } from '@radix-ui/themes'
import React from 'react'
import { IoMailOutline } from 'react-icons/io5';
import { LuMapPin, LuPhone } from 'react-icons/lu';

const ProfileCard = () => {
    return (
        <Box minWidth="240px">
            <Card className='shadow-md' size={'3'}>
                <Flex className='border-b-2 py-3' gap="3" align="center" justify={'between'}>
                    <Flex gap="3" align="center" >
                        <Avatar
                            size="5"
                            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                            radius="full"
                            fallback="T"
                        />
                        <Box>
                            <Text as="div" size="2" weight="bold">
                                Teodros Girmay
                            </Text>
                            <Text as="div" size="2" color="gray">
                                Engineering
                            </Text>
                            <Text as="div" size="2" color="gray">
                                2019
                            </Text>
                        </Box>
                    </Flex>
                    <Box>
                        <Button color='gray' variant='outline' radius='full' size={'4'}>Edit Profile</Button>
                    </Box>
                </Flex>
                <Flex gap={'5'} className='pt-3 text-gray-700' >
                    <Text className='flex gap-2 items-center' size={'2'}><LuMapPin /> Ash Dr. San Jose, South Dakota</Text>
                    <Text className='flex gap-2 items-center' size={'2'}><IoMailOutline /> support@Xgenious.com</Text>
                    <Text className='flex gap-2 items-center' size={'2'}><LuPhone /> (480) 555-0103</Text>
                </Flex>
            </Card>
        </Box>
    )
}

export default ProfileCard;