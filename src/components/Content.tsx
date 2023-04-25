import imagem1 from '../img/imagem1.jpg'

export function Content() {

  return (
    <div className='h-64 bg-content rounded-xl drop-shadow-lg overflow-hidden'>
      <a href="">
        <div className='flex absolute w-full bottom-1'>
          <h2 className='text-center font-bold text-white p-2'>
            FEIRA GAÚCHA CHEGA NA SERRARIA SOUZA PINTO EM BH DE HJ ATÉ 01 DE MAIO.
          </h2>
        </div>
        <img src={imagem1} alt="" className='rounded-xl bg-contain max-w-full' />
      </a>
    </div>
  )
}