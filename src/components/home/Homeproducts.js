import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/productsSlice';
import { Link } from 'react-router-dom';
import '../../styles/Homeproducts.css'
const Homeproducts = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  const [MensProducts, setMensProducts] = useState([]);
  const [jeweleryProduts,setJeweleyProducts] =useState([]);
  const [ElectronicsProduts,setElectronicsProducts] =useState([]);
  const [WomenProduts,setWomenProducts] =useState([]);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);


  useEffect(() => {
    const filtered_men = products.filter((p) => p.category === "men's clothing");
    setMensProducts(filtered_men);
    const filtered_jewelery = products.filter((p) => p.category === 'jewelery');
    setJeweleyProducts(filtered_jewelery);
    const filtered_electronics = products.filter((p) => p.category === 'electronics');
    setElectronicsProducts(filtered_electronics);
    const filtered_women = products.filter((p) => p.category === "women's clothing");
    setWomenProducts(filtered_women);
  }, [products]);

  return (
   <>
    {
      status === "loading"?(<div class="d-flex justify-content-center">
        <div class="spinner-border text-info" role="status" style={{width:'5rem', height:' 5rem'}}>
        <span class="visually-hidden">Loading...</span>
        </div>
      </div>): status ==="succeeded"?(
        <>
        <div className='container-lg d-flex'>
        <section className='main_container'>
        <h4 className="heading">Men's clothing</h4>
          {MensProducts.map((product) => (
            <Link to={`/product/${product.id}`}style={{ textDecoration: 'none' }}>
            <div className="products">
              <img src={product.image} className="object-fit-contain border rounded" alt="product_pic" />
              <p>{product.title.substring(0, 25)}...</p>
              <span className='fw-bold text-success'>Upto 65% OFF</span>
            </div>
            </Link>
          ))}
        </section>
        <section className='main_container'>
        <h4 className="heading">Jewelery</h4>
          {jeweleryProduts.map((product) => (
            <Link to={`/product/${product.id}`}style={{ textDecoration: 'none' }}>
            <div className="products">
              <img src={product.image} className="object-fit-contain border rounded" alt="product_pic" />
              <p>{product.title.substring(0, 25)}...</p>
              <span className='fw-bold text-success'></span>
                {
                  product.price > 11 ? <span className='fw-bold text-success'>6-10% OFF</span>:<span className='fw-bold text-success'>special offer</span>
                }
            </div>
            </Link>
          ))}
        </section>
        </div>
    
        <section className="product_container">
            <h4 className="heading">Electronics</h4>
            { ElectronicsProduts.map((product) => (
           <Link to={`/product/${product.id}`} style={{ textDecoration: 'none',color:'black' }}>
            <div className="all_products">
                <img src={product.image} alt=" product_pic"/>
                <p>{product.title.substring(0, 20)}...</p>              
                {
                  product.price > 500 ? <span className='fw-bold text-success'>Min.70% OFF</span>:<span className='fw-bold text-success'>Min. 50% OFF</span>
                }
              </div>
              </Link>
    ))}
         </section>
        <section className="product_container">
            <h4 className="heading">Women's clothing</h4>
            { WomenProduts.map((product) => (
            <Link to={`/product/${product.id}`}style={{ textDecoration: 'none',color:'black' }}>
            <div className="all_products">
                <img src={product.image} alt=" product_pic"/>
                <p>{product.title.substring(0, 15)}...</p>             
                <span className='fw-bold text-success'>40-60% OFF</span>
              </div>
              </Link>
    ))}
         </section>
        </>
      ):(<p>Error:{error}</p>)
    }
   </>
  );
};

export default Homeproducts;