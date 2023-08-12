import React from 'react'

import Features from '../../Components/Features/Features'
import SalesChart from '../../Components/SalesChart/SalesChart'

import './Home.css'

export default function Home() {
  return (
    <div className='home'>
      <Features/>
      <SalesChart/>
    </div>
  )
}
