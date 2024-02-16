import React from 'react'

export default function button(props) {
  return (
      <div className='w-[190px] h-[50px] transition-[4s] hover:shadow-inner-zinc-300 hover:brightness-150'>
          <button onClick={()=> props.fct(0)}
           className='text-[30px] font-bold text-blue-950 bg-slate-50 rounded-lg w-[100%] h-[100%] border-[4px] shadow-inner drop-shadow-2xl shadow-gray-950 hover:border-green-400 hover:bg-orange-300'> 
            RESTART
          </button>
      </div>
  )
}
