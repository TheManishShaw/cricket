import React, { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const fetchUpcoming = `
query schedule{
  newSchedule(type:"International", status:"upcoming", page:1){ 
      
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

const International = () => {
    const [upcomingdata , setUpComingData] = useState([])
  React.useEffect (() =>{
    fetch('https://api.devcdc.com/cricket', {
      method: "POST",
      headers: {"content-type": "application/json"},
      body : JSON.stringify({ query: fetchUpcoming })
    }).then( response => response.json())
    .then(function(data) {
        abc = data.data.newSchedule;
        setUpComingData(data.data.newSchedule);
      })
  }, []);
 
  return (
    <>
    {upcomingdata.map((post)=>(

        <div className=''>
     
        <div className='bg-gray-800 mt-4 rounded-2xl justify-start items-center p-3 text-white font-semibold flex gap-2'>
                        <span className='bg-red-600 p-1 rounded-md'>
                            INT
                        </span>
                        <h1 className=''>{post.seriesName}</h1>
                        <div className=''>
                            <span className='' >{">"}</span>
                        </div>            
                    </div>
                  <div
                    key={post.seriesID}
                    className="relative rounded-md p-3 my-2  bg-gray-800 text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                  >
                    <div className='flex items-center  gap-3 text-sm justify-between'>
                        <div className='flex gap-3'>
                        <h3 className="text-sm font-medium leading-5">
                      {post.seriesID}
                    </h3>
                    <div className='bg-blue-800/20 border border-sky-600 rounded-2xl px-2'>
                    <span className='  uppercase text-sky-600 text-[10px] flex justify-center items-center '>
                        
                        <ul className='list-disc '> 
                        <li className='list-inside'>{post.seriesAvailable}</li>
                        </ul>
                    </span>
                    </div>
                        </div>
                 <div className='bg-gray-700 p-2 rounded-lg'>
                    <img className='w-5 h-5' src='/assets/images/bell.png'/>
                 </div>
                   
                    </div>
                    <div className='flex justify-start items-center py-2 gap-3'>
                       <img className='w-3 h-3' src="/assets/images/pin.png" alt="" /> <span className='text-[13px] font-medium'>{post.league}</span>
                    </div>
                   <div className='flex justify-between text-white bg-gray-900 rounded-md p-2 items-center'>
                    <div className='flex justify-center items-center gap-2'>
                      <img className='w-10 h-10' src={post.team1img} alt="India" /> {post.teamone}
                    </div>
                    <div className=' border-[#2ac515] text-[#2ac515]  p-1 px-2 border-2 rounded-2xl'>
                        {post.matchType}
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img className='w-10 h-10' src={post.seriesView}alt="" />
                        {post.seriesView}
                    </div>
                   </div>
                    <div className='bg-gray-900 rounded-md my-3 items-center justify-center flex'>
                        <span className='p-1 text-white font-semibold'>{post.matchtiming}</span>
                    </div>
                    <div className=''>
                        <p className='mb-2'>WINE PERCENTAGE</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-700">
                         <div className="bg-[#2ac515] h-2.5 rounded-full" style={{width: "54%"}}></div>

                        </div>
                        <div className='flex justify-between mt-2'>
                            <h2>IND(54%)</h2>
                            <h2>SA(46%)</h2>
                        </div>
                    </div>                   

                  
                  </div>
    </div>
    ))}
    </>
  )
}

export default International