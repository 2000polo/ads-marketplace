import React from 'react'
import ProfileEditForm from '../components/ProfileEditForm'
import { Card, Flex } from '@radix-ui/themes'

const Profile = () => {
    return (
        <Card size={'4'}>
            <Flex direction={'column'} align={'center'} justify={'center'}>
                <ProfileEditForm />
            </Flex>
        </Card>
    )
}

export default Profile