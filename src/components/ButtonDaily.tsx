import { CaretCircleLeft, CaretCircleRight } from 'phosphor-react';

export function ButtonDaily() {

  return (
    <div className='w-full my-1 flex justify-center'>
      <button>
        <CaretCircleLeft size={25} color="#B8C1C9" weight="duotone" />
      </button>
      <button>
        <CaretCircleRight size={25} color="#B8C1C9" weight="duotone" />
      </button>
    </div>
  )
}