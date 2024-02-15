import React from 'react'

export default function title(props) {
  return (
    <div id='topContainer' className='w-[100%] flex h-[20%] justify-center items-center'> 

        <div id="titleContainer" className = "w-[700px] h-[100%] border-[2px] rounded-lg flex justify-between p-3 items-center">
            <div id='left' className=''>
                <img src={props.src} alt="" />

            </div>
            <div id='right' className='h-[100%] w-[150px] bg-white rounded-xl '>
                <div className='flex flex-col items-center pt-2'>
                    <p className='text-blue-950 font-[800] text-[15px]'>SCORE</p>
                    <p className='text-blue-950 text-[55px] font-[800]'> {props.score} </p>
                </div>
            </div>

        </div>
    </div>
  )
}
