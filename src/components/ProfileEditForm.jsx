import { Button, Callout } from '@radix-ui/themes'
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Form from '@radix-ui/react-form';
import { useDispatch, useSelector } from 'react-redux';
import { editUserProfile } from '../features/authSlice';
import { FiInfo } from 'react-icons/fi';

const ProfileEditForm = () => {

    const { loading, error } = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form Submitted:', data);
        dispatch(editUserProfile(data));
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
                    <Form.Field name="first-name" className='w-full'>
                        <div className='flex flex-col items-start w-full'>
                            <Form.Label style={{ marginBottom: '5px' }}>First Name</Form.Label>
                            <Form.Control asChild>
                                <input
                                    type="text"
                                    placeholder="Enter first name"
                                    {...register('first-name', {
                                        required: 'first name is required',
                                    })}
                                    style={{
                                        padding: '8px',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        width: '100%',
                                    }}
                                />
                            </Form.Control>
                            {errors?.['first-name'] && (
                                <Form.Message style={{ color: 'red', fontSize: '12px' }}>
                                    {errors?.['first-name'].message}
                                </Form.Message>
                            )}
                        </div>
                    </Form.Field>
                    {/* username field */}
                    <Form.Field name="last-name" className='w-full'>
                        <div className='flex flex-col items-start w-full'>
                            <Form.Label style={{ marginBottom: '5px' }}>Last Name</Form.Label>
                            <Form.Control asChild>
                                <input
                                    type="text"
                                    placeholder="Enter last name"
                                    {...register('price', {
                                        required: 'last name is required',
                                    })}
                                    style={{
                                        padding: '8px',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        width: '100%',
                                    }}
                                />
                            </Form.Control>
                            {errors?.['last-name'] && (
                                <Form.Message style={{ color: 'red', fontSize: '12px' }}>
                                    {errors?.['last-name'].message}
                                </Form.Message>
                            )}
                        </div>
                    </Form.Field>

                    {/* Password Field */}
                    <Form.Field name="email" className='w-full'>
                        <div className='flex flex-col items-start w-full'>
                            <Form.Label style={{ marginBottom: '5px' }}>Email</Form.Label>
                            <Form.Control asChild>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                    style={{
                                        padding: '8px',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        width: '100%',
                                    }}
                                />
                            </Form.Control>
                            {errors.email && (
                                <Form.Message style={{ color: 'red', fontSize: '12px' }}>
                                    {errors.email.message}
                                </Form.Message>
                            )}
                        </div>
                    </Form.Field>

                    <Form.Field name="username" className='w-full'>
                        <div className='flex flex-col items-start w-full'>
                            <Form.Label style={{ marginBottom: '5px' }}>Username</Form.Label>
                            <Form.Control asChild>
                                <input
                                    type="text"
                                    placeholder="Enter your username"
                                    {...register('username', {
                                        required: 'Username is required',
                                    })}
                                    style={{
                                        padding: '8px',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        width: '100%',
                                    }}
                                />
                            </Form.Control>
                            {errors.username && (
                                <Form.Message style={{ color: 'red', fontSize: '12px' }}>
                                    {errors.username.message}
                                </Form.Message>
                            )}
                        </div>
                    </Form.Field>

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

                    <Form.Field name="location" className='w-full'>
                        <div className='flex flex-col items-start w-full'>
                            <Form.Label style={{ marginBottom: '5px' }}>Location</Form.Label>
                            <Form.Control asChild>
                                <input
                                    type="text"
                                    placeholder="Enter your location"
                                    {...register('location', {
                                        required: 'location is required',
                                    })}
                                    style={{
                                        padding: '8px',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        width: '100%',
                                    }}
                                />
                            </Form.Control>
                            {errors.location && (
                                <Form.Message style={{ color: 'red', fontSize: '12px' }}>
                                    {errors.location.message}
                                </Form.Message>
                            )}
                        </div>
                    </Form.Field>
                    <Form.Field name="phn" className='w-full'>
                        <div className='flex flex-col items-start w-full'>
                            <Form.Label style={{ marginBottom: '5px' }}>Contact Number</Form.Label>
                            <Form.Control asChild>
                                <input
                                    type="text"
                                    placeholder="Enter your contact number"
                                    {...register('phn', {
                                        required: 'contact number is required',
                                    })}
                                    style={{
                                        padding: '8px',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        width: '100%',
                                    }}
                                />
                            </Form.Control>
                            {errors.phn && (
                                <Form.Message style={{ color: 'red', fontSize: '12px' }}>
                                    {errors.phn.message}
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

export default ProfileEditForm