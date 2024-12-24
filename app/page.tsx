import About from '@/components/about'
import Contact from '@/components/contact'
import Hero from '@/components/hero'
import Skill from '@/components/skill'
import React from 'react'

const Home = () => {
  return (
    <>
    <Hero />
    <About />
    <Skill />
    {/* <Project /> */}
    <Contact />
    </>
  )
}

export default Home