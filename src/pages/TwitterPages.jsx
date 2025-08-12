import React from 'react'
import MainLayout from '../layouts/MainLayout'
import TwitterHero from '../components/twitterComponent/TwitterHero'
import TwitterPreview from '../components/twitterComponent/TwitterPreview'


const TwitterPage = () => {
  return (
    <MainLayout>
     <TwitterHero />
     {/* <TwitterPreview /> */}
    </MainLayout>
  )
}

export default TwitterPage