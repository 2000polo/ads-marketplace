import { Box, Button, Card, Flex, Heading, Strong, Text } from '@radix-ui/themes'
import React from 'react'

const AdCard = () => {
    return (
        <Box minWidth="240px">
            <Card size="2">
                <Flex gap={'4'} >
                    <img
                        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Bold typography"
                        style={{
                            display: "block",
                            objectFit: "cover",
                            // width: "100%",
                            height: 170,
                            backgroundColor: "var(--gray-5)",
                        }}
                        className='w-1/6 rounded-lg'
                    />
                    <Box className='w-full'>
                        <Flex width={'100%'} justify={'between'} direction={'row'} gap={'2'}>
                            <Flex direction={'column'} gap='2'>
                                <Text className='font-medium' size={'4'}>
                                    Luxury couple apartment
                                </Text>
                                <Text size='2' as="p">
                                    Dallas, Texas · <span className='text-purple-600'>24hrs ago</span>
                                </Text>
                            </Flex>
                            <Flex gap={'3'}>
                                <Button color='gray' variant='outline' radius='full' size={'4'}>View</Button>
                                <Button variant='solid' radius='full' size={'4'}>Edit Ad</Button>
                            </Flex>
                        </Flex>
                        <Text className='font-normal flex-1 mt-4' size='6' as="p">
                            $124.80
                        </Text>
                    </Box>
                </Flex>
            </Card>
        </Box>
    )
}

export default AdCard;