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

let house =Math.floor(Math.random()*3) +1


  return (
    <div className='w-[100%] h-[500px] bg-amber-400'>
        <div className='flex w-[80%] justify-center relative left-[10%] gap-[500px] bg-teal-900'>
          <p>YOU PICKED</p>
          <p>THE HOUSE PICKED</p>
        </div>

          <div className='bg-red-300 flex flex-col justify-center items-center'>
          
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
              choix = {"scissors"}
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
              choix = {"rock"}
            />
            
            :
            <div></div>

          }
          {/* RANDOM CHOICE */}
          {
            house==1 ?             
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
            house==2 ?             
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
            house==3 ?             
            <Choice 
              src ={props.src}
              color ={props.color}
              fct={props.fct}
              choix = {"paper"}
            />
            
            :
            <div></div>

          }


            {/* <Choice 
              src ={props.src}
              color ={props.color}
              fct={props.fct}
              choix = {"paper"}
            /> */}

          </div>


    </div>
  )
}
