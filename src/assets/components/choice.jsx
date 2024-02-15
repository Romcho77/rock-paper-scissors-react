import React from 'react'

export default function choice(props) {
    let i
    if(props.choix=="rock"){
        i = 3
    }else if (props.choix == "paper"){
        i = 1
    }else if (props.choix == "scissors"){
        i = 2

    }
  return (
    <div className='flex flex-col  justify-center items-center h-[110px] bg-white p-5 z-0 rounded-[50%] shadow-inner drop-shadow-2xl shadow-gray-950 transition
                    hover:shadow-inner-zinc-300 hover:brightness-150'
                    
                    style={{border : props.color}} >

        <img src={props.src} onClick={()=> props.fct(i)} alt="" className='brightness-50 hover:brightness-100' />

    </div>
  )
}
