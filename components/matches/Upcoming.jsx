import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let [categories] = useState({
    All: [
      {
        id: 1,
        match:'South Africa tour of india, 2022',
        title: '1st T20I',
        matchtiming:'9 June, 07:00 PM',
        status: 'upcoming',
        team1img: '/assets/images/india.png',
        team2img: '/assets/images/south-africa.png',
        teamone: 'IND',
        teamtwo: 'SA',
        place: 'Delhi',

      },
      {
        id: 2,
        match:'Australia tour of Sri Lanka, 2022',
        title: '1st T20I',
        matchtiming:'5 hrs  24 mins to toss',
        status: 'upcoming',
        team1img: '/assets/images/sri-lanka.png',
        team2img: '/assets/images/australia.png',
        teamone: 'SL',
        teamtwo: 'AUS',
        place: 'Colombo',
      },
    ],
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
        <Tab.List className="max-w-4xl flex space-x-1 justify-evenly rounded-3xl bg-blue-900/20 p-1 ">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-3xl py-2.5 text-[12px] font-medium leading-5 text-white',
                  'ring-[#2ac515] ring-opacity-60 ring-offset-2 ring-offset-[#2ac515] focus:outline-none focus:ring-1',
                  selected
                    ? 'text-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        </div>
      
        <Tab.Panels>
         
         
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl  grid grid-flow-rows lg:grid-rows-4 xl:grid-cols-4',
                'focus:outline-none '
              )}
            >
                  
              <ul>
                {posts.map((post) => (
                    <>
                    <div className='bg-gray-800 mt-4 rounded-2xl justify-start items-center p-3 text-white font-semibold flex gap-2'>
                        <span className='bg-red-600 p-1 rounded-md'>
                            INT
                        </span>
                        <h1 className=''>{post.match}</h1>
                        <div className=''>
                            <span className='' >{">"}</span>
                        </div>            
                    </div>
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 my-2  bg-gray-800 text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                  >
                    <div className='flex items-center  gap-3 text-sm justify-between'>
                        <div className='flex gap-3'>
                        <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>
                    <div className='bg-blue-800/20 border border-sky-600 rounded-2xl px-2'>
                    <span className='  uppercase text-sky-600 text-[10px] flex justify-center items-center '>
                        
                        <ul className='list-disc '> 
                        <li className='list-inside'>{post.status}</li>
                        </ul>
                    </span>
                    </div>
                        </div>
                 <div className='bg-gray-700 p-2 rounded-lg'>
                    <img className='w-5 h-5' src='/assets/images/bell.png'/>
                 </div>
                   
                    </div>
                    <div className='flex justify-start items-center py-2 gap-3'>
                       <img className='w-3 h-3' src="/assets/images/pin.png" alt="" /> <span className='text-[13px] font-medium'>{post.place}</span>
                    </div>
                   <div className='flex justify-between text-white bg-gray-900 rounded-md p-2 items-center'>
                    <div className='flex justify-center items-center gap-2'>
                      <img className='w-10 h-10' src={post.team1img} alt="India" /> {post.teamone}
                    </div>
                    <div className=' border-[#2ac515] text-[#2ac515]  p-1 px-2 border-2 rounded-2xl'>
                        T20
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img className='w-10 h-10' src={post.team2img}alt="" />
                        {post.teamtwo}
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

                  
                  </li>
                  </>
                ))}
              </ul>
            </Tab.Panel>
          ))}
         
        </Tab.Panels>
      </Tab.Group>
     
    </div>
  )
}
