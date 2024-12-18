import { Button, Callout, Heading } from '@radix-ui/themes'
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Form from '@radix-ui/react-form';
import { login } from '../features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FiInfo } from 'react-icons/fi';

const LoginForm = () => {

    const dispatch = useDispatch();
    const { error, loading } = useSelector((state) => state.auth);

    console.log("global state", error, loading);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form Submitted:', data);
        dispatch(login(data))
        // Handle login logic here (e.g., API call)
    };

    return (
        <>
            <Heading className='w-1/3'>Login To Your Account</Heading>
            {
                (error !== null) &&
                <Callout.Root color="red">
                    <Callout.Icon>
                        <FiInfo />
                    </Callout.Icon>
                    <Callout.Text>
                        Incorrect username or pasword
                    </Callout.Text>
                </Callout.Root >
            }
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

                    {/* Submit Button */}
                    <Form.Submit asChild>
                        {/* <button
                                        type="submit"
                                        style={{
                                            padding: '10px 20px',
                                            border: 'none',
                                            borderRadius: '4px',
                                            backgroundColor: '#4CAF50',
                                            color: '#fff',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Login
                                    </button> */}
                        <Button loading={loading} className='w-full' size={'3'} radius='full'>
                            Login
                        </Button>
                    </Form.Submit>
                </Form.Root>
            </div>
        </>
    )
}

export default LoginForm