import { Card } from '@radix-ui/themes';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

    const location = useLocation();

    const sideMenuData = [
        {
            label: "My Account",
            path: 'account'
        },
        {
            label: "Profile",
            path: 'profile'
        },
        {
            label: "Ads",
            path: 'ads'
        },
        {
            label: "Post Ad",
            path: 'post-ad',
            isHighlight: true,
        },
        {
            label: "Logout",
            // path: '/post-ad',
            // isHighlight: true,
        },
    ]

    return (
        <Card className='shadow-md'>
            <ul className='flex flex-col gap-0 p-6 bg-white h-full rounded-lg min-h-[450px]'>
                {
                    sideMenuData?.map(({ path, label, isHighlight }) => {
                        return <li className={`pl-9 font-medium ${location?.pathname?.includes(path) ? 'bg-black text-white' : 'bg-transparent text-gray-800'} p-4 rounded-full ${isHighlight && 'text-pink-600'} `}><Link to={path} >{label}</Link></li>
                    })
                }
            </ul>
        </Card>
    )
}

export default Sidebar