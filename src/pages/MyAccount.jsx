import React, { useEffect } from 'react'
import ProfileCard from '../components/ProfileCard'
import AdCard from '../components/AdCard'
import { Flex } from '@radix-ui/themes'
import { useDispatch, useSelector } from 'react-redux'
import { getAdPosts } from '../features/adSlice'

const MyAccount = () => {

    const dispatch = useDispatch();
    const adsStore = useSelector((state) => state.ads)
    const userStore = useSelector((state) => state.auth)

    console.log("adstore", adsStore, userStore)

    useEffect(() => {
        if (dispatch) {
            console.log("useEffec worked")
            dispatch(getAdPosts())
        }
    }, [dispatch])

    return (
        <Flex gap={'4'} direction={'column'}>
            <ProfileCard />
            <AdCard />
            <AdCard />
        </Flex>
    )
}

export default MyAccount