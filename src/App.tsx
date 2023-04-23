import './lib/dayjs'
import { List } from 'phosphor-react';
import './styles/global.css'
//import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-full flex space-x-2">
        <div className='w-9/12 h-14 border-2 border-zinc-800 bg-teal-800 opacity-40 rounded-b-xl flex items-center space-x-3'>
          <button>
            <List size={40} color="#fff0f0" weight="light" />
          </button>
          <h1 className='w-3.5 opacity-70 font-extrabold text-3xl'>BHAZ</h1>

        </div>
        <div className='w-3/12 h-14 border-2 border-zinc-800 bg-teal-800 opacity-40 rounded-b-xl'>

        </div>
      </div>
    </div>
  )
}
