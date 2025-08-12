import React from 'react'
import MainLayout from '../layouts/MainLayout'
import YoutubeHero from '../components/youtubeComponent/YoutubeHero'
import YoutubePreview from '../components/youtubeComponent/YoutubePreview'

const YoutubePage = () => {
  return (
    <MainLayout>
     <YoutubeHero />
     {/* <YoutubePreview /> */}
    </MainLayout>
  )
}

export default YoutubePage