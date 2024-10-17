import React from 'react'
import Homeproducts from './Homeproducts'
import ad from '../../assets/image/ad.jpg'
import ad1 from '../../assets/image/ad1.webp'
import ad2 from '../../assets/image/ad2.jpg'
const Home = () => {
  
  return (
    <>
    {/* carousel     */}
 <div id="carouselExampleAutoplaying" className="carousel slide my-3 d-sm-none d-md-block d-none d-sm-block" data-bs-ride="carousel">
  <div className="carousel-inner" style={{height:'300px'}}>
    <div className="carousel-item active">
      <img src={ad} className="w-100" style={{objectFit:'contain'}}  alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={ad1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={ad2} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      <Homeproducts/>
    </>
  )
}

export default Home

