 2 roles; normal voter and adnin ( who can monitor as well as put name of candidates for election )
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
