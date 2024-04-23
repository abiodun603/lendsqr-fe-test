import { FC } from 'react'

interface UsersCardInterface {
    image: string,
    name: string,
    count: string
}

const DashboardCard: FC<UsersCardInterface> = ({image, name, count}) => {
  return (
    <div className='w-60 h-40 rounded-[4px] border border-l border-[#213f7d0f] drop-shadow-sm'>

    </div>
  )
}

export default DashboardCard