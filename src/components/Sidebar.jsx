import { Card } from '@radix-ui/themes';
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logout } from '../features/authSlice';
import { useDispatch } from 'react-redux';

const Sidebar = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        }
    ]

    const logoutHandler = () => {
        dispatch(logout());
        navigate('auth/login')
        // return <Navigate to="/auth/login" />
    }

    return (
        <Card className='shadow-md'>
            <ul className='flex flex-col gap-0 p-6 bg-white h-full rounded-lg min-h-[450px]'>
                {
                    sideMenuData?.map(({ path, label, isHighlight }) => {
                        return <li className={`pl-9 font-medium ${location?.pathname?.includes(path) ? 'bg-black text-white' : `bg-transparent  ${isHighlight ? 'text-pink-600' : 'text-gray-800'}`} p-4 rounded-full  `}><Link to={path} >{label}</Link></li>
                    })
                }
                <li className={`pl-9 font-medium bg-transparent  text-gray-800 p-4 rounded-full  `}><Link onClick={() => logoutHandler()} >Logout</Link></li>
            </ul>
        </Card>
    )
}

export default Sidebar