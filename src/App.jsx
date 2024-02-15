import { useState } from 'react'
import Logo from "./assets/img/logo.svg"
import Title from "./assets/components/title"
import Scissors from "./assets/img/icon-scissors.svg"
import Rock from "./assets/img/icon-rock.svg"
import Choice from "./assets/components/choice"
import Paper from "./assets/img/icon-paper.svg"
import './App.css'

function App() {

  const [value, setValue] = useState("0")


  let score = 12
  let orange = "10px solid orange"
  let aqua = "10px solid aqua"
  let red = "10px solid red"
  return (
    <div className='w-screen h-screen bg-blue-950 pt-5 flex flex-col gap-6'>
      
      <Title
        src = {Logo}
        score = {score}
      />

      <div id='triangleDiv' className='w-[100%] h-[80%] gap-[150px] flex flex-col pt-[75px] items-center'>
        <div id='topTriangle' className='flex justify-center items-center h-[30%] gap-[220px]'>
            <Choice 
              src = {Paper}
              color = {aqua}
            />
            <Choice 
              src = {Scissors}
              color = {orange}
            />
        </div>
        <div>
        <Choice 
              src = {Rock}
              color = {red}
            />
        </div>



      </div>








    </div>
  )
}

export default App