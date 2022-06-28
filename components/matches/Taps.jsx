import { Tab } from '@headlessui/react'
import Upcoming from './Upcoming';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const MyTabs =() => {
  return (
    <>
    <div className='bg-gray-900 w-full h-screen'>
        <h1 className='font-bold text-white text-2xl p-4'>Shecdule</h1>
    <Tab.Group>
   
      <Tab.List className="w-full justify-evenly flex items-center   text-white font-semibold border-b-2  border-gray-600 border-offset-10">
        <Tab   className={({ selected }) =>
                classNames(
                  ' py-2.5 text-sm font-medium leading-5 text-white',
                  '  focus:outline-none ',
                  selected
                    ? 'text-white shadow'
                    : 'text-blue-100  hover:text-white'
                )
              }>Upcoming</Tab>
        <Tab>Live</Tab>
        <Tab>Results</Tab>
      </Tab.List>

      <Tab.Panels>
        <Tab.Panel>
          <Upcoming/>
        </Tab.Panel>
        <Tab.Panel>
              <div className='bg-gray-400 flex justify-center items-center h-screen text-4xl'>
              Live
              </div>

        </Tab.Panel>
        <Tab.Panel>
        <div className='bg-gray-500 flex justify-center items-center h-screen text-4xl'>
              Result
              </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
    </>
  )
}
export default MyTabs;