
import '../Estilos/Pantalla.css'


export function Pantalla ({valor,operador,numeroAnt,ModoNoche}){
   


    return(
    <div className='Pantalla-calc'>
            <div style={{display:'grid', justifyContent:'end',color:'white',height:'100%',alignItems:'end',marginRight:'5%',fontSize:'x-large',fontWeight:'600'}}>
                <div style={{display:'flex', alignItems:'end',height:'100%'}}>
                <div style={{color: ModoNoche ? "black" : "white", fontSize:'35px'}}>{valor}</div>
                <div style={{color: ModoNoche ? "black" : "white",  fontSize:'35px'}}>{operador}</div>
                </div>
                <div style={{color: ModoNoche ? "black" : "white", display:'flex', alignItems:'center',height:'100%', justifyContent:'end',  fontSize:'35px'}}>{numeroAnt}</div>
                
            </div>
    </div>)
}