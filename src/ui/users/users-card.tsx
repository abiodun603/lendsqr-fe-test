import { FC } from 'react'
import Image from 'next/image'

// ** Helpers
import { formatValue } from '@/helpers/formatValueComma'

interface UsersCardInterface {
    image: string,
    name: string,
    count: number
}

const UsersCard: FC<UsersCardInterface> = ({image, name, count}) => {
  return (
    <div className='w-full h-40 bg-white rounded-[4px] space-y-3 border-l border-[#213f7d0f] drop-shadow-sm py-4 pl-6'>
      {/* icon */}
      <div className="relative w-10 h-10 rounded-full">
        <Image
          src={image}
          alt="image"
          fill
          className='rounded-full'
        />
      </div>
      {/* name */}
      <h2 className='text-sm text-n500 font-medium uppercase'>{name}</h2>
      {/* price */}
      <p className='text-b200 text-2xl font-semibold'>{formatValue(count)}</p>
    </div>
  )
}

export default UsersCard