import React from 'react'
import { CardComponent } from '../components/card/CardComponent'
import { company } from '../enums/data'

export const Root: React.FC = () => {
  return (
 <>
 <div className='min-h-auto min-w-full bg-red-300   dark:bg-primary'>
  <div className='  flex  items-center  gap-10 '>
   
        {company.map((item, index) => (
                <CardComponent key={index}>
                    <img src={item.logo} alt={`${item.name}`} className=' h-10 object-cover' />
                    </CardComponent>
            ))}

  </div>

  
 </div>
 </>
  )
}
