import React, { useEffect } from 'react'
import ProfileCard from '../components/ProfileCard'
import AdCard from '../components/AdCard'
import { Flex, Text } from '@radix-ui/themes'
import { useDispatch, useSelector } from 'react-redux'
import { getAdPosts } from '../features/adSlice'
import { getCurrentUser } from '../features/authSlice'

const MyAccount = () => {

    const dispatch = useDispatch();
    const adsStore = useSelector((state) => state.ads)
    const userStore = useSelector((state) => state.auth)

    console.log("adstore", adsStore, userStore)

    useEffect(() => {
        if (dispatch) {
            console.log("useEffec worked")
            dispatch(getAdPosts())
            dispatch(getCurrentUser())
        }
    }, [dispatch])

    return (
        <Flex gap={'4'} direction={'column'}>
            <ProfileCard />
            {
                adsStore.adsList?.length > 0 ? adsStore.adsList.map((ad) => {
                    return <AdCard data={ad} />
                }) :
                    <Text className='text-center mt-12'>No ads to diplay</Text>
            }

        </Flex>
    )
}

export default MyAccount