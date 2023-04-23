import './lib/dayjs'
import { List, MagnifyingGlass, HeartStraight, UserGear, CaretCircleLeft, CaretCircleRight } from 'phosphor-react';
import './styles/global.css'
//import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className="w-screen h-screen">
     {/* Header */}
      <div className="w-full flex space-x-2">
        <div className='w-11/12 h-14 border-2 border-zinc-800 bg-teal-800 opacity-30 rounded-b-xl flex items-center space-x-3'>
          <button className='mx-2'>
            <List size={32} color="#fff0f0" weight="bold" />
          </button>
          <h1 className='w-3.5 opacity-70 font-extrabold text-3xl'>BHAZ</h1>

        </div>
        <div className='w-1/12 h-14 border-2 border-zinc-800 bg-teal-800 opacity-30 rounded-b-xl flex items-center justify-between p-3'>
          <button className=''>
            <MagnifyingGlass size={30} color="#fff0f0"/>
          </button>
          <button>
            <HeartStraight size={30} color="#fff0f0"/>
          </button>
          <button>
            <UserGear size={30} color="#fff0f0"/>
          </button>
        </div>
      </div>
      {/* Daily bar */}
      <div className='w-full mt-4 flex justify-center'>
        <div className='w-10/12 h-64 bg-content opacity-30 rounded-xl drop-shadow-lg'>
        </div>
      </div>
      <div className='w-full my-1 flex justify-center'>
        <button>
          <CaretCircleLeft size={25} color="#B8C1C9" weight="duotone"/>
        </button>
        <button>
          <CaretCircleRight size={25} color="#B8C1C9" weight="duotone"/>
        </button>
      </div>
      {/* Content */}
      <div className='flex justify-center'>
        <hr className='border-zinc-700 w-11/12 opacity-20 border-2 rounded-full blur-xs'/>
      </div>
      <div className='flex-row flex'>
        <div className='w-9/12 m-4 flex-row flex space-x-5'>
          <div className='w-4/12 h-64 bg-content opacity-30 rounded-xl drop-shadow-lg'>
          </div>
          <div className='w-4/12 h-64 bg-content opacity-30 rounded-xl drop-shadow-lg'>
          </div>
          <div className='w-4/12 h-64 bg-content opacity-30 rounded-xl drop-shadow-lg'>
          </div>
        </div>
        <div className='w-1 m-4'>
          <hr className='border-zinc-700 w-11/12 h-full opacity-20 border-2 rounded-full blur-xs'/>
        </div>
        <div className='w-3/12 m-4 flex-col space-x-2'>
          <div className='w-12/12 h-64 bg-content opacity-30 rounded-xl drop-shadow-lg'>
          </div>
        </div>
      </div>
    </div>
  )
}
