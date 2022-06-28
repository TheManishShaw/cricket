import Head from 'next/head'
import React from 'react'
import Taps from '../../components/matches/Taps'

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>Assignment</title>
      </Head>
      <Taps/>  
    </div>
  )
}

export default Dashboard