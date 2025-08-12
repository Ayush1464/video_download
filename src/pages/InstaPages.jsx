import React from 'react'
import MainLayout from '../layouts/MainLayout'
import InstaHero from '../components/instaComponent/InstaHero'
import InstaPreview from '../components/instaComponent/InstaPreview'


const InstaPages = () => {
  return (
    <MainLayout>
     <InstaHero />
     {/* <InstaPreview /> */}
    </MainLayout>
  )
}

export default InstaPages