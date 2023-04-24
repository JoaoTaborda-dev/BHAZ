import './lib/dayjs'
import { List, MagnifyingGlass, HeartStraight, UserGear, CaretCircleLeft, CaretCircleRight, SelectionBackground } from 'phosphor-react';
import './styles/global.css'
import imagem1 from './img/imagem1.jpg'
import { Header } from "./components/Header";
//import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className="w-screen h-screen font-sans">
      <Header />
      {/* Daily bar */}
      <div className='w-full mt-4 flex justify-center'>
        <div className='w-10/12 h-64 bg-content opacity-30 rounded-xl drop-shadow-lg'>
        </div>
      </div>
      <div className='w-full my-1 flex justify-center'>
        <button>
          <CaretCircleLeft size={25} color="#B8C1C9" weight="duotone" />
        </button>
        <button>
          <CaretCircleRight size={25} color="#B8C1C9" weight="duotone" />
        </button>
      </div>
      {/* Content */}
      <div className='flex justify-center'>
        <hr className='border-zinc-700 w-11/12 opacity-20 border-2 rounded-full blur-xs' />
      </div>
      <div className='flex-row flex'>
        <div className='w-9/12 m-4 flex-row flex space-x-5'>
          <div className='w-4/12 h-64 bg-content rounded-xl drop-shadow-lg '>
            <img src={imagem1} alt="" className='rounded-xl bg-contain max-w-full' />
            <div className='flex items-end'>
              <h2 className='text-center font-bold align-text-bottom absolute opacity-100 hover:opacity-100'>
                FEIRA GAÚCHA CHEGA NA SERRARIA SOUZA PINTO EM BH DE HJ ATÉ 01 DE MAIO.
              </h2>
            </div>
          </div>
          <div className='w-4/12 h-64 bg-content opacity-30 rounded-xl drop-shadow-lg'>
          </div>
          <div className='w-4/12 h-64 bg-content opacity-30 rounded-xl drop-shadow-lg'>
          </div>
        </div>
        <div className='w-1 m-4'>
          <hr className='border-zinc-700 w-11/12 h-full opacity-20 border-2 rounded-full blur-xs' />
        </div>
        <div className='w-3/12 m-4 flex-col space-x-2'>
          <div className='w-12/12 h-64 bg-content opacity-30 rounded-xl drop-shadow-lg'>
          </div>
        </div>
      </div>
    </div>
  )
}
