import { useState } from 'react';
import './App.css';
import Boton from './Componentes/Boton'
import { Pantalla } from './Componentes/Pantalla.js';



function App() {
  
const[FirstNum,SetFirstNum]= useState(null);
const[StateOp,SetOp]= useState(null);
const[NextNum,SetNextNum] = useState(null)

 
const ControladorNum = (PropNum,IsNum) => 
{

    if(IsNum == true)
    {
      if(FirstNum == null)
      {
        SetFirstNum(PropNum)
      }
      else if (FirstNum !== null && StateOp == null)
      {
        SetFirstNum(FirstNum + PropNum)
      }
      else if (FirstNum !== null && StateOp !== null)
      {
        if(NextNum==null)
        {
            SetNextNum(PropNum)
        }
        else
        {
          SetNextNum(NextNum + PropNum)
        }
      }


    }
    else if(IsNum == false && PropNum !== "borr" && PropNum !== "C")
    {
        if(FirstNum!== null && StateOp == null)
        {
           if(PropNum!= "=" )
          {
              SetOp(PropNum)
          }
          
        }
  
        else if ( FirstNum !== null && StateOp !== null && NextNum!== null)
        {
          console.log("Entro operacion completa")
            if(StateOp == "+")
            {
              SetFirstNum(Number(FirstNum) + Number(NextNum))
              SetNextNum(null)
              if(PropNum != "="){
                SetOp(PropNum)
              }
              else{
                SetOp(null)
              }
              
            }
            if(StateOp == "x")
            {
              SetFirstNum(Number(FirstNum) * Number(NextNum))
              SetNextNum(null)
              if(PropNum != "="){
                SetOp(PropNum)
              }
              else{
                SetOp(null)
              }
            }
            if(StateOp == "/")
            {
              SetFirstNum(Number(FirstNum) / Number(NextNum))
              SetNextNum(null)
              if(PropNum != "="){
                SetOp(PropNum)
              }
              else{
                SetOp(null)
              }
            }
            if(StateOp == "-")
            {
              SetFirstNum(Number(FirstNum) - Number(NextNum))
              SetNextNum(null)

              if(PropNum != "="){
                SetOp(PropNum)
              }
              else{
                SetOp(null)
              }
            }
      }
      
    }
    else if (IsNum == false && PropNum =="borr")
      {
        console.log("Entro a borrar")

        if(NextNum !== null)
        {
            SetNextNum(NextNum.slice(0,-1))
        }
        else if(StateOp !== null)
        {
            SetOp(null)
        }
        else if(FirstNum !== null)
        {
      
            var Caracter = FirstNum.toString()
            SetFirstNum(Caracter.slice(0,-1))
        
        }

      }
      else if(IsNum == false && PropNum =="C")
      {
          SetFirstNum(null)
          SetOp(null)
          SetNextNum(null)
      }


   
}


  return (
    <div className="App d-flex justify-content-center">
      <div className="contenedor-principal shadow-button">
        <div id='Pantalla 'className='d-flex justify-content-center d-flex aling-item-center' style={{height:'30%'}}>
            <Pantalla valor={FirstNum} operador={StateOp} numeroAnt={NextNum}/>
        </div>

        <div id='Teclado' className=' justify-content-center' >
          <Boton Num="C" IsNum={false} ControladorNum={ControladorNum}/>
          <Boton Num="borr" IsNum={false} ControladorNum={ControladorNum}/>
          <Boton Num="+" IsNum={false}ControladorNum={ControladorNum} />
          <Boton Num="-" IsNum={false}ControladorNum={ControladorNum} />
      
          <Boton Num="7" IsNum={true}  ControladorNum={ControladorNum} />
          <Boton Num="8" IsNum={true} ControladorNum={ControladorNum}/>
          <Boton Num="9" IsNum={true} ControladorNum={ControladorNum}/>
          <Boton Num="x" IsNum={false} ControladorNum={ControladorNum}/>
          
          <Boton Num="4" IsNum={true} ControladorNum={ControladorNum}/>
          <Boton Num="5" IsNum={true} ControladorNum={ControladorNum}/>
          <Boton Num="6" IsNum={true} ControladorNum={ControladorNum}/>
          <Boton Num="/" IsNum={false}  ControladorNum={ControladorNum}/>
          
         
          <Boton Num="1" IsNum={true} ControladorNum={ControladorNum}/>
          <Boton Num="2" IsNum={true} ControladorNum={ControladorNum}/>
          <Boton Num="3" IsNum={true} ControladorNum={ControladorNum}/>
          <Boton Num="=" IsNum={false} ControladorNum={ControladorNum}/>
    
    
      </div>

      <div className='d-flex'style={{marginInline:'15px'}}>
         <Boton Num="0" IsNum={true}  ControladorNum={ControladorNum}/>
          <Boton Num="." IsNum={true} ControladorNum={ControladorNum}/>
         </div>
    </div>
    </div>
  );
}

export default App;
