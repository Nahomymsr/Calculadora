import '../Estilos/Pantalla.css'


export function Pantalla ({valor}){



    return(
    <div className='Pantalla-calc'>
            <div style={{display:'flex', justifyContent:'end',color:'white',height:'100%',alignItems:'end',marginRight:'5px',fontSize:'x-large',fontWeight:'600'}}>{valor}</div>
    </div>)
}