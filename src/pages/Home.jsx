import React from 'react'
import Header from '../components/Header'
import { Flex, Grid, Heading, IconButton, Section, Text } from '@radix-ui/themes'
import HeroImage1 from '../assets/hero-image1.png';
import HeroImage2 from '../assets/hero-image3.png';
import HeroImage3 from '../assets/hero-image2.png';
import HeroShape from '../assets/hero-shape.png';
import ProductCardSm from '../components/ProductCardSm';
import { MdOutlineGridOn } from 'react-icons/md';
import { FaList } from 'react-icons/fa6';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Header />
            {/* <Flex className='px-2 lg:px-28 pt-16' align={'center'} justify={'between'} wrap={'wrap-reverse'} > */}
            <div className="px-3 lg:px-28 pt-16 flex flex-col-reverse lg:flex-row items-center justify-between">
                <Flex direction={'column'} gapY={'3'} className=' font-medium text-center md:text-left md:pt-16'>
                    <Text size={{ initial: "8", md: "9" }}>Get daily thing</Text>
                    <Text size={{ initial: "8", md: "9" }}>in the same <span className='text-gray-400'>platform</span></Text>
                </Flex>

                <div class="flex w-1/2 flex-wrap">
                    <div class="w-1/2 p-1 md:p-1">
                        <img
                            alt="gallery"
                            class="block h-full w-full object-cover object-center"
                            src={HeroImage1} />
                    </div>
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-full p-1 md:p-1">
                            <img
                                alt="gallery"
                                class="block h-full w-full object-cover object-center"
                                src={HeroImage2} />
                        </div>
                        <div class="w-full p-1 md:p-1">
                            <img
                                alt="gallery"
                                class="block h-full w-full object-cover object-center"
                                src={HeroImage3} />
                        </div>
                    </div>
                </div>
            </div>
            {/* </Flex> */}

            <Section size={'4'} className='px-2 md:px-28 flex flex-col text-center'>
                <Text className='tracking-widest' color='crimson' size="2">WHAT'S NEW</Text>
                <Text className='font-medium' size={{ initial: "8", md: "9" }}>Fresh Recommendations</Text>

                <Section className='flex items-center justify-between'>
                    <Text className='tracking-widest font-medium' color='crimson' size="6">33 <span className='text-black'>Items</span></Text>
                    <Flex gap={'2'}>
                        <IconButton style={{ background: 'black' }} radius='full' size={'3'}>
                            <MdOutlineGridOn />
                        </IconButton>
                        <IconButton style={{ color: 'black', border: 'black' }} color='gray' variant='outline' radius='full' size={'3'} >
                            <FaList />
                        </IconButton>
                    </Flex>
                </Section>

                <Grid columns={{ initial: "2", md: "4" }} gap={{ initial: "2", md: "6" }} rows="repeat(2)" width="auto" >
                    <ProductCardSm />
                    <ProductCardSm />
                    <ProductCardSm />
                    <ProductCardSm />
                    <ProductCardSm />
                    <ProductCardSm />
                </Grid>

            </Section>
            <Footer />

        </>
    )
}

export default Home