import './lib/dayjs'
import { List, MagnifyingGlass, HeartStraight, UserGear, CaretCircleLeft, CaretCircleRight, SelectionBackground } from 'phosphor-react';
import './styles/global.css'
import { Header } from "./components/Header";
import { DailyBar } from "./components/DailyBar";
import { ButtonDaily } from "./components/ButtonDaily";
import { Content } from "./components/Content";

//import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className="w-auto font-sans">
      <Header />
      {/* Daily bar */}
      <DailyBar />
      <ButtonDaily />
      {/* Content */}
      <div className='flex justify-center'>
        <hr className='border-zinc-700 w-11/12 opacity-20 border-2 rounded-full blur-xs' />
      </div>
      <div className='w-full flex-row flex'>
        <div className='w-9/12 m-2 grid grid-flow-row grid-cols-3 gap-2'>
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
        </div>
        <div className='w-1 m-2'>
          <hr className='border-zinc-700 w-11/12 h-full opacity-20 border-2 rounded-full blur-xs' />
        </div>
        {/* Top List */}
        <div className='w-3/12 m-4 flex-col space-x-2'>
          <div className='w-12/12 h-auto opacity-40 p-3 text-content font-semibold hover:opacity-90'>
            <h2 className='text-center text-lg font-bold'>Top list semanal:</h2>
            <div className='grid grid-flow-row grid-cols-1'>
              <h3><a href="http://">1° - Festival de sei lá o que</a></h3>
              <h3><a href="http://">2° - Festival de sei lá o que</a></h3>
              <h3><a href="http://">3° - Festival de sei lá o que</a></h3>
              <h3><a href="http://">4° - Festival de sei lá o que</a></h3>
              <h3><a href="http://">5° - Festival de sei lá o que</a></h3>
              <h3><a href="http://">6° - Festival de sei lá o que</a></h3>
              <h3><a href="http://">7° - Festival de sei lá o que</a></h3>
              <h3><a href="http://">8° - Festival de sei lá o que</a></h3>
              <h3><a href="http://">9° - Festival de sei lá o que</a></h3>
              <h3><a href="http://">10° - Festival de sei lá o que</a></h3>
            </div>
          </div>
        </div>
      </div>
      <footer className='h-64 bg-content'>
      </footer>
    </div>
  )
}
