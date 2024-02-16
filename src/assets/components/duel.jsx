import React from 'react'
import Choice from "./choice"
import Button from './button'

export default function duel(props) {
  let i
  let result 
  let house = Math.floor(Math.random()*3) + 1
  if(props.value==1){
    i = 1
    if(house == i){
      result = "DRAW"
    }else if (house == 2){
        props.setScore(props.score-1)
        result = "LOSE"
    }else{
      props.setScore(props.score+1)
      result = "WIN"
    }
  }else if (props.value == 2){
    i = 2
    if(house == i){
      result = "DRAW"
    }else if (house == 3){
        props.setScore(props.score-1)
        result = "LOSE"
    }else{
      props.setScore(props.score+1)
      result = "WIN"
    }
  }else if (props.value == 3){
    i = 3
    if(house == i){
      result = "DRAW"
    }else if (house == 1){
        props.setScore(props.score-1)
        result = "LOSE"
    }else{
      props.setScore(props.score+1)
      result = "WIN"
    }
}






  return (
    <div className='w-[100vw] h-[500px] bg-blue-950 z-40'>
        <div className='flex w-[80%] pt-12 justify-center relative left-[10%] gap-[500px] '>
          <p className='text-[30px] text-white font-bold'>YOU PICKED</p>
          <p className='text-[30px] text-white font-bold'>THE HOUSE PICKED</p>
        </div>

          <div className=' h-[70%] w-[100vw] gap-[170px] flex justify-center items-center'>
          
          {
            i==1 ?             
            <Choice 
              src ={props.src}
              color ={props.color}
              fct={props.fct}
              choix = {"paper"}
            />
            
            :
            console.log("error")

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
            console.log("error")

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
            console.log("error")

          }
            {/* MIDDLE SECTION */}
            <div className='flex flex-col justify-center items-center'>
              <p className='text-[55px] text-center text-white font-bold'>
                YOU {result}
              </p>


              <Button 
                fct={props.fct}
              />
            </div>

          {/* RANDOM CHOICE */}

          {
            house==1 ?             
            <Choice 
              src ={props.srcHousePaper}
              color = {"10px solid aqua"}
              fct={props.fct}
              choix = {"paper"}
            />
            
            :
            console.log("error")

          }
          {
            house==2 ?             
            <Choice 
              src ={props.srcHouseScissors}
              color ={"10px solid orange"}
              fct={props.fct}
              choix = {"scissors"}
            />
            
            :
            console.log("error")

          }
          {
            house==3 ?             
            <Choice 
              src ={props.srcHouseRock}
              color ={"10px solid red"}
              fct={props.fct}
              choix = {"paper"}
            />
            
            :
            console.log("error")

          }




          </div>


    </div>
  )
}
