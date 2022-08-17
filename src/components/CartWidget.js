import React from 'react'
import { Cart2 } from 'react-bootstrap-icons'
import './CartWidget.css'

function CartWidget() {
    return (
        <>
            <div className='bg-dark' expand="lg" variant="dark">
                <Cart2 color="floralwhite"
                width="30"
                height="30"
                />;
            </div>
            ,{' '} ,{' '}
            <div>
                <p className='text-light'>0</p>
            </div>
        </>
    )
}

export default CartWidget