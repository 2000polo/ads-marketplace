import React from 'react'
import AddPostForm from '../components/AddPostForm'
import { Card, Flex } from '@radix-ui/themes'

const AddPost = () => {
    return (
        <Card size={'4'}>
            <Flex direction={'column'} align={'center'} justify={'center'}>
                <AddPostForm />
            </Flex>
        </Card>
    )
}

export default AddPost