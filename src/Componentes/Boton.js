import '../Estilos/BotonStyle.css'

export default function Boton({Num ,IsNum, ControladorNum}){
    
   
    
    
    return(

            <div className={"btn-style " + ( IsNum ? 'Background-Num' : 'Background-Op')+ " shadow-button"} onClick={()=>ControladorNum(Num,IsNum)}   >
                {Num}
            </div> 
    )
}