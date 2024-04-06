import React from 'react'
import Hero from '../components/Hero'
import Numbers from '../components/Numbers'
import Problem from '../components/Problem'
import WhyVotex from '../components/WhyVotex'
import Header from '../components/Header'

import  '../index.css';

const Home = () => {
  return (
    <div className='w-screen jockey-one-regular '>
        <Header />
        <Hero />
        <Numbers />
        <Problem />
        <WhyVotex />
    </div>
  )
}

export default Home;