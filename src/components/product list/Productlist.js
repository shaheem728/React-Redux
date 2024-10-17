// src/components/ProductsList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/productsSlice';
import { Link } from 'react-router-dom';

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div className="container-lg d-flex flex-wrap">
      {status === 'loading' ? (
        <div class="d-flex justify-content-center">
        <div class="spinner-grow text-info" role="status" style={{width:'4rem', height:' 4rem'}}>
        <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      ) : status === 'succeeded' ? (
        products.map((product) => {
          return (
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <div className='shadow-lg  m-1 position-relative bg-light rounded'>
                <div className="card " style={{ width: '250px', height: '400px' }}>
                  <img src={product.image} className="object-fit-contain  mx-4" style={{ height: '200px', width: '200px' }} alt="product_pic" />
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-body-secondary ">{product.category}</h6>
                    <h5 className="card-title ">{product.title.substring(0, 25)}</h5>
                    <span className=" bg-warning text-white rounded ">{product.rating.rate}<i className="bi bi-star-fill"></i></span>
                    <span className="fw-bold text-secondary ms-1">({product.rating.count})</span><br />
                    <span className="text-success fw-bold ms-1">${product.price}</span>
                    <div className=' position-absolute start-0 bottom-0  '>
                      <Link to={`/product/${product.id}`} className="btn btn-info " style={{ width: '250px', color: 'white', border: 'none' }}>View Detail</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <p>Error: {error}</p>
      )}
    </div>
  );
};

export default ProductsList;