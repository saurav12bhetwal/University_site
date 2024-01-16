import React from 'react'
import { useState } from 'react'
import Table from './Table'
const SyllabusComponent = () => {
  const [value, setvalue] = useState(false)
  const [value2, setvalue2] = useState(false)
  const [value3, setvalue3] = useState(false)
  const [value4, setvalue4] = useState(false)
  const [value5, setvalue5] = useState(false)
  const clickfunc=()=>{
    if(value){
  
      console.log(value)
      setvalue(false)
    }
    else{
      setvalue(true)
    }
  }
  return (
    <div className='outersyllabus'>
      <div className="innersyllabus">
       <div className=" innerbutton"><button className='ComButton' onClick={clickfunc}>Btech</button>
      <div> {value? <div style={{marginTop:"10px"}}><Table></Table></div>:" "}</div>
       
       </div>
       <div className="innerbutton"><button onClick={()=>{value2?setvalue2(false):setvalue2(true)}} className='ComButton'>Mtech</button>  <div> {value2? <div style={{marginTop:"10px"}}><Table></Table></div>:" "}</div></div>

       <div className="innerbutton"><button onClick={()=>{value3?setvalue3(false):setvalue3(true)}} className='ComButton'>MCA</button>  <div> {value3? <div style={{marginTop:"10px"}}><Table></Table></div>:" "}</div></div>

       <div className="innerbutton"><button onClick={()=>{value4?setvalue4(false):setvalue4(true)}} className='ComButton'>MBA</button>  <div> {value4? <div style={{marginTop:"10px"}}><Table></Table></div>:" "}</div></div>

       <div className="innerbutton"><button onClick={()=>{value5?setvalue5(false):setvalue5(true)}} className='ComButton'>B.Pharma</button>  <div> {value5? <div style={{marginTop:"10px"}}><Table></Table></div>:" "}</div></div>
      </div>
      
    </div>
  )
}

export default SyllabusComponent
