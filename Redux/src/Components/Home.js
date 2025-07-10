import React from 'react'

export default function Home() {
  return (
    <>

    <div className='add-icon'>
    <img src='https://media.istockphoto.com/id/1994666187/vector/add-to-cart.jpg?s=612x612&w=0&k=20&c=3dKQh6logiBchMqmGQUnBgeI6D2cMkE-ikGi7Li-t1o=
'/>
    </div>
    <h1 className='App'> Home Component.</h1>
     <div className='cart-wrapper-item'>
         <div className='img-wrapper'>
         <img src="https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png"/>
         </div>
         <div className='text-wrapper'>
            <span>
                I-Phone
            </span>
            <br></br>
             <span>
                Price : $1000.00
            </span>
         </div>
         <div className='btn-wrapper'>
            <button> Add to Cart</button>
         </div>
      </div>  
     

    </>
  )
}
