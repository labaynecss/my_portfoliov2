import React from 'react'

interface CardProps {

   
    children?: React.ReactNode;
  
}

export const CardComponent: React.FC<CardProps> = ( { children }) => {
  return (
    <div className=' h-auto  w-auto space-x-6 p-4 rounded-xl  bluring items-center gap-5 '>
      <div className='flex flex-row justify-center items-center'>
        {children}
      </div>
   
    </div>
  )
}
