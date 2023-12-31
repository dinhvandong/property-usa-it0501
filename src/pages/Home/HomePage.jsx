import React from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Header/Banner'
import TopProperty from '../../components/Top/TopProperty'

const HomePage = () => {
  return (
    <div className='w-full h-auto flex flex-col'>
      <Header/>
      <Banner/>
      <TopProperty/>
    </div>
  )
}

export default HomePage