import React from 'react'
import MainLayout from '../layouts/MainLayout'
import TwitterHero from '../components/twitterComponent/TwitterHero'
import TwitterPreview from '../components/twitterComponent/TwitterPreview'
import FaceBookHero from '../components/facebookComponent/FaceBookHero'
import FacebookPreview from '../components/facebookComponent/FaceBookPreview'

const TwitterPages = () => {
  return (
    <MainLayout>
     <FaceBookHero />
     {/* <FacebookPreview /> */}
    </MainLayout>
  )
}

export default TwitterPages