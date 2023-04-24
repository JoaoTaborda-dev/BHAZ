import { List, MagnifyingGlass, HeartStraight, UserGear } from 'phosphor-react';

export function Header() {

  return (
    <div className="w-full flex space-x-2">
      <div className='w-11/12 h-14 border-2 border-zinc-800 bg-teal-800 opacity-30 rounded-b-xl flex items-center space-x-3'>
        <button className='mx-2'>
          <List size={32} color="#fff0f0" weight="bold" />
        </button>
        <h1 className='w-3.5 opacity-70 font-extrabold text-3xl'>BHAZ</h1>

      </div>
      <div className='w-1/12 h-14 border-2 border-zinc-800 bg-teal-800 opacity-30 rounded-b-xl flex items-center justify-between p-3'>
        <button className=''>
          <MagnifyingGlass size={30} color="#fff0f0" />
        </button>
        <button>
          <HeartStraight size={30} color="#fff0f0" />
        </button>
        <button>
          <UserGear size={30} color="#fff0f0" />
        </button>
      </div>
    </div>
  )
}