import React, { useState, useEffect} from 'react';
import '../../styles/ProductDetail.css';
import { Link, useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';

const Productdetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const Data = useSelector((state) => state.products.items);
 
    const [product, setProduct] = useState(null); // Update from setLoading to setProduct for clarity
    useEffect(() => {
        if (Data.length > 0) {
            const item = Data.find((product) => product.id === parseInt(id));//check useParam id equal to product id
            setProduct(item);
        }
    }, [id, Data]);

    if (!product) {
        return <div class="d-flex justify-content-center">
        <div class="spinner-border text-info" role="status" style={{width:'5rem', height:' 5rem'}}>
        <span class="visually-hidden">Loading...</span>
        </div>
      </div>; 
    }

    return (
        <div className='container-lg'>

            <div className='row  shadow-lg m-3 rounded  bg-light main_contain'>
                <div className="col-5 text-center align-content-center">
                    <img src={product.image} className="image"  alt="product_pic" />
                    </div>
                    <div className="col">
                        <h3 className="fw-bold mt-2">{product.title}</h3>
                        <h6 className="mb-2 text-body-secondary ">{product.category}</h6>
                        {product.rating && (
                                <>
                                    <span className="bg-warning text-white rounded  ">
                                        {product.rating?.rate} <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="fw-bold text-secondary ms-1">
                                    Ratings & {product.rating?.count} Reviews
                                    </span>
                                </>
                            )}
                        <hr/>
                        <h6 className="mb-2 text-body-secondary fw-bold ">About this item</h6>
                        <p>{product.description}</p>
                        <hr/>
                            <p className='text-success fw-bold '>Special price</p>
                            <h5 className='fw-bold'>${product.price}</h5>
                           
                            <a href="/" className="btn btn-primary  w-25 my-2 fw-bold text-size"><i class="bi bi-lightning"></i>BUY NOW</a>
                           <Link to="/cart" className='btn btn-warning w-25 mx-1 text-light fw-bold text-size' onClick={() => dispatch(addToCart(product))}>
                            <i className="bi bi-cart3"></i> ADD TO CART
                    </Link>

                        </div>
                    </div>
                </div>
            
        
    );
};

export default Productdetail;
