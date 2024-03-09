import { useState } from 'react';
import './App.css';
import Boton from './Componentes/Boton'
import { Pantalla } from './Componentes/Pantalla.js';


var Num1 = null;
var Reset = false;
var OperadorAnt = null;
var OperadorAct = null;




function App() {
  
const[StateNum,SetNum]= useState(null);
const[StateOp,SetOp]= useState(null);
const[NextNum,SetNextNum] = useState(null)

 
const ControladorNum = (PropNum,IsNum) => {

    if(IsNum)
    {
    
          if(Num1 != null)
          {
              if (Reset == false)
              {
                  SetNextNum(PropNum);
                  Reset = true;

              }
              else
              {
                  
                  SetNextNum(NextNum + PropNum);
                
              }
            
          } 
          else
          {

             if (StateNum == null)
              {
              SetNum(PropNum)
              }
            else
            {
              SetNum(StateNum + PropNum)
            }
          
          }
     

    }

    else
    {
      if(Num1 != null)
      {
        if(OperadorAct =="x")
        {
            Num1= Number(Num1) * Number(NextNum)
            SetNum(Num1)
            SetNextNum("")
            Reset = false
        }

        if(OperadorAct =="-")
        {
            Num1= Number(Num1) - Number(NextNum)
            SetNum(Num1)
            SetNextNum("")
            Reset = false
        }
        if(OperadorAct =="/")
        {
            Num1= Number(Num1) / Number(NextNum)
            SetNum(Num1)
            SetNextNum("")
            Reset = false
        }

        if(OperadorAct =="+")
        {
            Num1= Number(Num1) + Number(NextNum)
            SetNum(Num1)
            SetNextNum("")
            Reset = false
        }

        if(OperadorAct == "=") 
        {
            if (OperadorAnt == "=" | OperadorAnt==null)
            {
              Num1 =StateNum
              SetNum(Num1)
            } 
        }

        if(PropNum == "CE") 
        {
          Num1 = null;
          Reset = false;
          OperadorAnt = null;
          OperadorAct = null;
          SetNum(Num1)
          
        }
        
      }
      else
      {
          Num1 = StateNum
        
      }

      if (OperadorAct == null && OperadorAnt == null)
      {
        OperadorAct=PropNum

        if(OperadorAct =="=" || OperadorAct == "CE" ){
          SetOp("")
        }
        else{
          SetOp(OperadorAct)
        }
        
          
        

      }
      else if(OperadorAct != null)
      {
        OperadorAnt = OperadorAct
        OperadorAct = PropNum

        if(OperadorAct =="=" || OperadorAct == "CE")
        {
         
          SetOp("")
        }
        else{
          SetOp(OperadorAct)
        }
        
        
        
      }
    
       
    }

   
}


  return (
    <div className="App d-flex justify-content-center">
      <div className="contenedor-principal shadow-button">
        <div id='Pantalla 'className='d-flex justify-content-center d-flex aling-item-center' style={{height:'30%'}}>
            <Pantalla valor={StateNum} operador={StateOp} numeroAnt={NextNum}/>
        </div>

        <div id='Teclado' className=' justify-content-center' >
          <Boton Num="CE" IsNum={false} ControladorNum={ControladorNum}/>
          <Boton Num="+" IsNum={false}ControladorNum={ControladorNum} />
          <Boton Num="-" IsNum={false}ControladorNum={ControladorNum} />
          <Boton Num="x" IsNum={false} ControladorNum={ControladorNum}/>
          <Boton Num="7" IsNum={true}  ControladorNum={ControladorNum} />
          <Boton Num="8" IsNum={true} ControladorNum={ControladorNum}/>
          <Boton Num="9" IsNum={true} ControladorNum={ControladorNum}/>
          <Boton Num="/" IsNum={false}  ControladorNum={ControladorNum}/>
          <Boton Num="4" IsNum={true} ControladorNum={ControladorNum}/>
          <Boton Num="5" IsNum={true} ControladorNum={ControladorNum}/>
          <Boton Num="6" IsNum={true} ControladorNum={ControladorNum}/>
          <Boton Num="=" IsNum={false} ControladorNum={ControladorNum}/>
          <Boton Num="0" IsNum={true}  ControladorNum={ControladorNum}/>
          <Boton Num="1" IsNum={true} ControladorNum={ControladorNum}/>
          <Boton Num="2" IsNum={true} ControladorNum={ControladorNum}/>
          <Boton Num="3" IsNum={true} ControladorNum={ControladorNum}/>
          
          
         
      
      </div>
    </div>
    </div>
  );
}

export default App;
