import './lib/dayjs'
import { List, MagnifyingGlass, HeartStraight, UserGear, CaretCircleLeft, CaretCircleRight, SelectionBackground } from 'phosphor-react';
import './styles/global.css'
import imagem1 from './img/imagem1.jpg'
import { Header } from "./components/Header";
import { DailyBar } from "./components/DailyBar";
import { ButtonDaily } from "./components/ButtonDaily";
//import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className="w-screen h-screen font-sans">
      <Header />
      {/* Daily bar */}
      <DailyBar />
      <ButtonDaily />
      {/* Content */}
      <div className='flex justify-center'>
        <hr className='border-zinc-700 w-11/12 opacity-20 border-2 rounded-full blur-xs' />
      </div>
      <div className='flex-row flex'>
        <div className='w-9/12 m-4 flex-row flex space-x-5'>
          <div className='w-4/12 h-64 bg-content rounded-xl drop-shadow-lg overflow-hidden'>
            <div className='flex absolute w-full'>
              <h2 className='text-center font-bold text-white'>
                FEIRA GAÚCHA CHEGA NA SERRARIA SOUZA PINTO EM BH DE HJ ATÉ 01 DE MAIO.
              </h2>
            </div>
            <img src={imagem1} alt="" className='rounded-xl bg-contain max-w-full' />
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
