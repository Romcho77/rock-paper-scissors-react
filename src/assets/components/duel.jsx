import React from 'react'
import Choice from "./choice"

export default function duel(props) {
  let i
  if(props.value==1){
    i = 1
  }else if (props.value == 2){
    i = 2
  }else if (props.value == 3){
    i = 3

}

  return (
    <div className='w-[100%] h-[500px] bg-amber-400'>
          <div className=' flex justify-center items-center'>

          {
            i==1 ?             
            <Choice 
              src ={props.src}
              color ={props.color}
              fct={props.fct}
              choix = {"paper"}
            />
            
            :
            <div></div>

          }
          {
            i==2 ?             
            <Choice 
              src ={props.src}
              color ={props.color}
              fct={props.fct}
              choix = {"paper"}
            />
            
            :
            <div></div>

          }
          {
            i==3 ?             
            <Choice 
              src ={props.src}
              color ={props.color}
              fct={props.fct}
              choix = {"paper"}
            />
            
            :
            <div></div>

          }


            <Choice 
              src ={props.src}
              color ={props.color}
              fct={props.fct}
              choix = {"paper"}
            />

          </div>


    </div>
  )
}
