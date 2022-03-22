import React from 'react'
import Formulario from './Formulario'
import useCotizador from '../hooks/useCotizador'
import Spinner from './Spinner'
import Resultado from './Resultado'



const AppSeguro = () => {

  const {resultado,cargando} = useCotizador()

  return (
    <>
        <header className='my-10'>
            <h1 className='text-center text-white font-bold text-4xl'>
                Cotizador de seguro de autos
            </h1>
        </header>

        <main className='bg-white mx-auto md:w-2/3 lg:w-2/4 shadow rounded-lg p-10'>
            <Formulario/>
            {cargando ? <Spinner/> : <Resultado/>}
        </main>

    </>
  )
}

export default AppSeguro