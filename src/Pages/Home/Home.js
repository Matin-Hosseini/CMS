import React from 'react'

import Features from '../../Components/Features/Features'
import SalesChart from '../../Components/SalesChart/SalesChart'

import './Home.css'
import WidgetSm from '../../Components/WidgetSm/WidgetSm'
import WidgetLg from '../../Components/WidgetLg/WidgetLg'


export default function Home() {
  return (
    <div className='home'>
      <Features/>
      <SalesChart/>
      <div className='home-widgets'>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
