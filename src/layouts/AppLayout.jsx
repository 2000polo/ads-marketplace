import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { Text } from '@radix-ui/themes'
import Sidebar from '../components/Sidebar'

const AppLayout = () => {
    return (
        <div>
            <Header />
            <div className="px-28 py-12 flex flex-col gap-2">
                <div className="text-gray-400">
                    <Text>Home /</Text>
                </div>
                <div className="flex gap-4">
                    <div className="w-1/4">
                        <Sidebar />
                    </div>
                    <div className="w-full">
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AppLayout