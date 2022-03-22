import { Fragment } from 'react'
import { MARCAS,YEARS,PLANES } from '../constants'
import useCotizador from '../hooks/useCotizador'
import Error from './Error'

const Formulario = () => {

    const {handleChangeDatos,datos,error,setError,cotizarSeguro} = useCotizador()

    

    const handleSubmit = e =>{
        e.preventDefault()

        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }

        setError('')
        // TODO : Cotizar
        cotizarSeguro()

    }
    
  return (

    <>
        {error && <Error/>}
        <form onSubmit={handleSubmit}>

            <div className='my-5'>
                <label className='block uppercase font-bold mb-3 text-gray-400'>
                    Marca
                </label>
                <select name="marca" 
                    className='w-full p-3 bg-white border border-indigo-500 rounded-lg'
                    onChange={e => handleChangeDatos(e)}
                    value={datos.marca}>
                    
                    <option value="">-- Seleccion Marca --</option>
                    {MARCAS.map(marca => (
                        <option key={marca.id} value={marca.id}>
                            {marca.nombre}
                        </option>
                    ))}

                </select>
            </div>

            <div className='my-5'>
                <label className='block uppercase font-bold mb-3 text-gray-400'>
                    Año
                </label>
                <select name="year" 
                    className='w-full p-3 bg-white border border-indigo-500 rounded-lg'
                    onChange={e => handleChangeDatos(e)}
                    value={datos.year}>
                    
                    <option value="">-- Seleccion Año --</option>

                    {YEARS.map(year => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                    
                </select>
            </div>

            <div className='my-5'>
                <label className='block uppercase font-bold mb-3 text-gray-400'>
                    Elige un plan
                </label>
                <div className='flex gap-3 items-center'>
                    {PLANES.map(plan =>(
                        <Fragment key={plan.id}>
                            <label> {plan.nombre} </label>
                            <input type="radio" name='plan' value={plan.id} onChange={e => handleChangeDatos(e)}/>
                        </Fragment>
                    ))}
                </div>
            </div>

            <input type="submit" 
                className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white
                cursor-pointer p-3 uppercase rounded-lg' 
                value="Cotizar"/>

        </form>
    </>
  )
}

export default Formulario