import { Button, Card, Flex, Heading, Section, Text } from '@radix-ui/themes'
import React from 'react';
import logo from '../assets/logo.png';
import authImage from '../assets/auth-img.png';
import LoginForm from '../components/LoginForm';

const Login = () => {


    return (
        <div className='px-28 py-12 flex items-center justify-center'>
            <Card style={{ padding: 0 }} className='w-full pt-0' size={'5'}>
                <Flex>
                    <Section className='w-1/2 flex items-center justify-center flex-col gap-6 px-20 text-center'>
                        <img src={logo} alt="" />
                        <Text>
                            Listbnb a Largest Classified Listing Marketplace offers perfect
                            Ads classifieds...
                        </Text>
                        <LoginForm />
                    </Section>
                    <Section className='w-1/2 flex items-center justify-center flex-col text-center gap-3 bg-[#F50964]/10'>
                        <img src={authImage} alt="" />
                        <Heading className=''>Don't have an account<span className='text-[#F50963]'>?</span></Heading>
                        <Text className='w-1/2'>
                            Listbnb a Largest Classified Listing Marketplace offers perfect
                            Ads classifieds...
                        </Text>
                        <Button className='w-full mt-5' size={'3'} radius='full'>
                            Register
                        </Button>
                    </Section>
                </Flex>
            </Card>
        </div>
    )
}

export default Login