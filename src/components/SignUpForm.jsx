import { Button, Heading } from '@radix-ui/themes'
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Form from '@radix-ui/react-form';
import { useDispatch } from 'react-redux';
import { login, signup } from '../features/authSlice';

const SignUpForm = () => {

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        console.log('Form Submitted:', data);
        dispatch(signup(data));
        // Handle login logic here (e.g., API call)
    };

    return (
        <>
            <Heading className='w-1/3'>Create Your Account</Heading>
            <div className='w-[75%]'>
                <Form.Root onSubmit={handleSubmit(onSubmit)} className='grid gap-3 w-full'>
                    {/* Email Field */}
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
                    {/* username field */}
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

                    {/* Password Field */}
                    <Form.Field name="password">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Form.Label style={{ marginBottom: '5px' }}>Password</Form.Label>
                            <Form.Control asChild>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters long',
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
                            {errors.password && (
                                <Form.Message style={{ color: 'red', fontSize: '12px' }}>
                                    {errors.password.message}
                                </Form.Message>
                            )}
                        </div>
                    </Form.Field>

                    {/* Confirm Password Field */}
                    <Form.Field name="re-password">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Form.Label style={{ marginBottom: '5px' }}>Confirm Password</Form.Label>
                            <Form.Control asChild>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    {...register('re-password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters long',
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
                            {errors?.['re-password'] && (
                                <Form.Message style={{ color: 'red', fontSize: '12px' }}>
                                    {errors?.['re-password'].message}
                                </Form.Message>
                            )}
                        </div>
                    </Form.Field>

                    {/* Submit Button */}
                    <Form.Submit asChild>
                        <Button className='w-full' size={'3'} radius='full'>
                            Login
                        </Button>
                    </Form.Submit>
                </Form.Root>
            </div>
        </>
    )
}

export default SignUpForm;