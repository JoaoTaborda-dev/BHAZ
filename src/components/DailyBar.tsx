import imagem1 from '../img/imagem1.jpg'

export function DailyBar() {

  return (
    <div className='w-full mt-4 flex justify-center'>
      <div className='w-10/12 h-64 bg-content opacity-70 rounded-xl drop-shadow-lg overflow-hidden'>
        <div className='flex absolute w-full bottom-2 justify-center'>
          <h2 className='font-bold text-white text-xl'>
            FEIRA GAÚCHA CHEGA NA SERRARIA SOUZA PINTO EM BH DE HJ ATÉ 01 DE MAIO.
          </h2>
        </div>
        <img src={imagem1} alt="" className='rounded-xl bg-contain max-w-full' />
      </div>
    </div>
  )
}