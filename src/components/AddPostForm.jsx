import { Button, Callout, Heading } from '@radix-ui/themes'
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Form from '@radix-ui/react-form';
import { useDispatch, useSelector } from 'react-redux';
import { login, signup } from '../features/authSlice';
import { FiInfo } from 'react-icons/fi';
import { postAdd } from '../features/adSlice';

const AddPostForm = () => {

    const { loading, error } = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        console.log('Form Submitted:', data);
        dispatch(postAdd(data));
        // Handle login logic here (e.g., API call)
    };

    return (
        <>
            {
                (error !== null) &&
                <Callout.Root color="red">
                    <Callout.Icon>
                        <FiInfo />
                    </Callout.Icon>
                    <Callout.Text>
                        {error}
                    </Callout.Text>
                </Callout.Root >
            }
            <div className='w-[75%]'>
                <Form.Root onSubmit={handleSubmit(onSubmit)} className='grid gap-5 w-full'>
                    {/* Email Field */}
                    <Form.Field name="title" className='w-full'>
                        <div className='flex flex-col items-start w-full'>
                            <Form.Label style={{ marginBottom: '5px' }}>Add title</Form.Label>
                            <Form.Control asChild>
                                <input
                                    type="text"
                                    placeholder="Enter Ad Title"
                                    {...register('title', {
                                        required: 'ad title is required',
                                    })}
                                    style={{
                                        padding: '8px',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        width: '100%',
                                    }}
                                />
                            </Form.Control>
                            {errors.title && (
                                <Form.Message style={{ color: 'red', fontSize: '12px' }}>
                                    {errors.title.message}
                                </Form.Message>
                            )}
                        </div>
                    </Form.Field>
                    {/* username field */}
                    <Form.Field name="price" className='w-full'>
                        <div className='flex flex-col items-start w-full'>
                            <Form.Label style={{ marginBottom: '5px' }}>Price</Form.Label>
                            <Form.Control asChild>
                                <input
                                    type="number"
                                    placeholder="Enter ad price"
                                    {...register('price', {
                                        required: 'Price is required',
                                    })}
                                    style={{
                                        padding: '8px',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        width: '100%',
                                    }}
                                />
                            </Form.Control>
                            {errors.price && (
                                <Form.Message style={{ color: 'red', fontSize: '12px' }}>
                                    {errors.price.message}
                                </Form.Message>
                            )}
                        </div>
                    </Form.Field>

                    {/* Password Field */}
                    <Form.Field name="description">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Form.Label style={{ marginBottom: '5px' }}>Description</Form.Label>
                            <Form.Control asChild>
                                <textarea
                                    type="text"
                                    placeholder="Enter ad description..."
                                    {...register('description', {
                                        required: 'Description is required',
                                        // minLength: {
                                        //     value: 6,
                                        //     message: 'Password must be at least 6 characters long',
                                        // },
                                    })}
                                    style={{
                                        padding: '8px',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        width: '100%',
                                        height: '200px'
                                    }}

                                />
                            </Form.Control>
                            {errors.description && (
                                <Form.Message style={{ color: 'red', fontSize: '12px' }}>
                                    {errors.description.message}
                                </Form.Message>
                            )}
                        </div>
                    </Form.Field>

                    {/* Confirm Password Field */}
                    <Form.Field name="image">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Form.Label style={{ marginBottom: '5px' }}>Image</Form.Label>
                            <Form.Control asChild>
                                <input
                                    type="text"
                                    placeholder="Enter image url"
                                    {...register('image', {
                                        required: 'image url is required',
                                        // minLength: {
                                        //     value: 6,
                                        //     message: 'Password must be at least 6 characters long',
                                        // },
                                    })}
                                    style={{
                                        padding: '8px',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        width: '100%',
                                    }}
                                />
                            </Form.Control>
                            {errors?.image && (
                                <Form.Message style={{ color: 'red', fontSize: '12px' }}>
                                    {errors?.image.message}
                                </Form.Message>
                            )}
                        </div>
                    </Form.Field>

                    {/* Submit Button */}
                    <Form.Submit asChild>
                        <Button loading={loading} className='w-full' size={'3'} radius='full'>
                            Post
                        </Button>
                    </Form.Submit>
                </Form.Root>
            </div>
        </>
    )
}

export default AddPostForm