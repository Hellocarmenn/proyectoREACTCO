import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {
    const {carrito,precioTotal} =useContext (CartContext);
    
  return (
    <div className='container'>
        <h1 className='main-title'>Carrito</h1>
        {
            carrito.map((prod)=>(
                <div key={prod.id}>
                    <br/>
                    <h3>{prod.nombre}</h3>
                    <p>Precio Unit:${prod.precio}</p>
                    <p>Precio Total: ${prod.precio * prod.cantidad}</p>
                    <br/>
                </div>

            ))
        }
        <h2>Precio Total:${precioTotal()}</h2>
        <button></button>

    </div>
  )
}

export default Carrito