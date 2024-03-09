import '../Estilos/Pantalla.css'


export function Pantalla ({valor,operador,numeroAnt}){



    return(
    <div className='Pantalla-calc'>
            <div style={{display:'flex', justifyContent:'end',color:'white',height:'100%',alignItems:'end',marginRight:'5px',fontSize:'x-large',fontWeight:'600'}}>
                <div>{valor}</div><div>{operador}</div>
                <div>{numeroAnt}</div>
                
                </div>
    </div>)
}