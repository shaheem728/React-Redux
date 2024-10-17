import React from 'react'
import { useNavigate } from 'react-router-dom'
 import { incrementQuantity, decrementQuantity, removeFromCart } from '../../features/cartSlice';
import { useDispatch,useSelector } from 'react-redux';
const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  // const { removeFromCart,incrementQuanty, decrementQuanty } = useContext(CartContext);
  const navigate = useNavigate()
  if (!cart) {
    return <div>Loading...</div>; // Fallback while product data is loading
}
  return (
    <>
    <div className='container-lg'>
    {cart.length === 0 ? (
      <div className='text-center my-5'>
        <h2 className='fw-bold '>Your cart is Empty</h2>
      <button className='btn btn-primary text-center' onClick={()=>{
        navigate(-1)
         }}>Back</button>
       </div>
       ) : (
         <>
            {cart.map((item) => (
                <div className='d-flex'>
                  <div className=' shadow-lg bg-body-tertiary m-3 text-center align-content-center' style={{ borderRadius:'20px',height:'150px',width:'190px'}}>
                  <img src={item.image} className="object-fit-contain" style={{height:'110px'}}alt="..."/>
                  </div>
                  <div className='row shadow-lg bg-body-tertiary m-3 p-2' style={{ borderRadius:'20px',width:'700px'}}>
                    <div className='col-11'>
                   <h5 className='d-inline'>{item.title}</h5>
                   <p className='text-success fw-bold'> ${(item.price * item.quantity).toFixed(2)}</p>
                   <button className='btn btn-primary fw-bold m-3'><i class="bi bi-lightning"></i>Buy Now</button>
                   <button className='btn btn-danger fw-bold' onClick={() => dispatch(removeFromCart(item.id))}><i class="bi bi-trash3">Remove</i></button>
                   </div>
                   <div className='col-1 text-center align-content-center'>
                   <a  className='text-dark' onClick={() => dispatch(incrementQuantity(item.id))}><i class="bi bi-plus-circle-fill"></i></a>
                   <span className='btn bg-secondary text-white' >{item.quantity}</span><br/>
                   <a  className='text-dark' onClick={() => dispatch(decrementQuantity(item.id))}><i class="bi bi-dash-circle-fill"></i></a>
                   </div>
                  </div>
                </div>

            ))}
        </>
    )}
</div>
</>
);
};

  



export default Cart
