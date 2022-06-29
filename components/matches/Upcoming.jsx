import React, { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import UpcomingMatch from './UpcomingMatch';
import International from './International'
import Demostic from './Demostic'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const fetchUpcoming = `
query schedule{
  newSchedule(type:"All", status:"upcoming", page:1){ 
      
      seriesID
      matchType
      seriesName
      seriesView
      league
      seriesAvailable
      }
}
`


let abc;
export default function Example() {
  const [upcomingdata , setUpComingData] = useState([])
  React.useEffect (() =>{
    fetch('https://api.devcdc.com/cricket', {
      method: "POST",
      headers: {"content-type": "application/json"},
      body : JSON.stringify({ query: fetchUpcoming })
    }).then( response => response.json())
    .then((data) => {
      setUpComingData(data.data.newSchedule);
    })
  }, []);
 
  let [categories] = useState({
    All: setUpComingData,
    INTERNATIONAL: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        match:'Australia tour of Sri Lanka, 2022',
        title: '1st T20I',
        matchtiming:'5 hrs  24 mins to toss',
        status: 'upcoming',
        team1img: '/assets/images/india.png',
        team2img: '/assets/images/south-africa.png',
        teamone: 'SL',
        teamtwo: 'AUS',
        place: 'Colombo',
      },
    ],
    DOMESTIC: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        match:'Australia tour of Sri Lanka, 2022',
        title: '1st T20I',
        matchtiming:'5 hrs  24 mins to toss',
        status: 'upcoming',
        team1img: '/assets/images/india.png',
        team2img: '/assets/images/south-africa.png',
        teamone: 'SL',
        teamtwo: 'AUS',
        place: 'Colombo',
      },
    ],
  })

  return (
    <div className="w-full grid px-2 py-5 bg-gray-900 sm:px-0">
      <Tab.Group>
        <div className='px-5 gird grid-flow-col justify-center items-center '>
        <Tab.List className="w-full justify-evenly flex items-center bg-gray-700 rounded-2xl   text-white font-semibold  border-offset-10">
        <Tab    className={({ selected }) =>
                classNames(
                  'w-full rounded-3xl py-2.5 text-[12px] font-medium leading-5 text-white',
                  'ring-[#2ac515] ring-opacity-60 ring-offset-2 ring-offset-[#2ac515] focus:outline-none focus:ring-1',
                  selected
                    ? 'text-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }>ALL</Tab>
        <Tab  className={({ selected }) =>
                classNames(
                  'w-full rounded-3xl py-2.5 text-[12px] font-medium leading-5 text-white',
                  'ring-[#2ac515] ring-opacity-60 ring-offset-2 ring-offset-[#2ac515] focus:outline-none focus:ring-1',
                  selected
                    ? 'text-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }>INTERNATIONAL</Tab>
        <Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-3xl py-2.5 text-[12px] font-medium leading-5 text-white',
                  'ring-[#2ac515] ring-opacity-60 ring-offset-2 ring-offset-[#2ac515] focus:outline-none focus:ring-1',
                  selected
                    ? 'text-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              } >DEMOSTIC</Tab>
      </Tab.List>
        
        </div>
      
        <Tab.Panels>
            <Tab.Panel        
            >
              <UpcomingMatch/>
            </Tab.Panel>
            <Tab.Panel        
            >
              <International/>
            </Tab.Panel>
         
            <Tab.Panel        
            >
              <Demostic/>
            </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
     
    </div>
  )
}
