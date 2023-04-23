import './lib/dayjs'
import { List, MagnifyingGlass, HeartStraight, UserGear, CaretCircleLeft, CaretCircleRight } from 'phosphor-react';
import './styles/global.css'
//import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className="w-screen h-screen">
     {/* Header */}
      <div className="w-full flex space-x-2">
        <div className='w-10/12 h-14 border-2 border-zinc-800 bg-teal-800 opacity-30 rounded-b-xl flex items-center space-x-3'>
          <button className='mx-2'>
            <List size={32} color="#fff0f0" weight="bold" />
          </button>
          <h1 className='w-3.5 opacity-70 font-extrabold text-3xl'>BHAZ</h1>

        </div>
        <div className='w-2/12 h-14 border-2 border-zinc-800 bg-teal-800 opacity-30 rounded-b-xl flex items-center justify-between'>
          <button className=''>
            <MagnifyingGlass size={32} color="#fff0f0"/>
          </button>
          <button>
            <HeartStraight size={32} color="#fff0f0"/>
          </button>
          <button>
            <UserGear size={32} color="#fff0f0"/>
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
          <CaretCircleLeft size={25} color="#1C2833" weight="duotone"/>
        </button>
        <button>
          <CaretCircleRight size={25} color="#1C2833" weight="duotone"/>
        </button>
      </div>
      {/* Content */}
      <div>
        
      </div>

    </div>
  )
}
