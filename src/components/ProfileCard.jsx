import { Avatar, Box, Button, Card, Flex, Text } from '@radix-ui/themes'
import React from 'react'
import { IoMailOutline } from 'react-icons/io5';
import { LuMapPin, LuPhone } from 'react-icons/lu';
import { useSelector } from 'react-redux';

const ProfileCard = () => {

    const { firstName, lastName, email, phone, location, username, image } = useSelector((state) => state.auth?.user);

    // console.log("currentUser", currentUser)

    return (
        <Box minWidth="240px">
            <Card className='shadow-md' size={'3'}>
                <Flex className='border-b-2 py-3' gap="3" align="center" justify={'between'}>
                    <Flex gap="3" align="center" >
                        <Avatar
                            size="5"
                            src={image ? image : "https://img.freepik.com/premium-photo/software-engineer-digital-avatar-generative-ai_934475-8997.jpg"}
                            radius="full"
                            fallback="T"
                        />
                        <Box>
                            <Text as="div" size="2" weight="bold">
                                {firstName ? firstName : username}
                            </Text>
                            <Text as="div" size="2" color="gray">
                                Member Since
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
                    <Text className='flex gap-2 items-center' size={'2'}><LuMapPin /> {location ? location : 'N/A'}</Text>
                    <Text className='flex gap-2 items-center' size={'2'}><IoMailOutline /> {email ? email : 'N/A'}</Text>
                    <Text className='flex gap-2 items-center' size={'2'}><LuPhone /> {phone ? phone : 'N/A'}</Text>
                </Flex>
            </Card>
        </Box>
    )
}

export default ProfileCard;