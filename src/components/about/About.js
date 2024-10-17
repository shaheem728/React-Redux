import React,{useContext} from 'react'
import shop from '../../assets/image/ecommerce.jpg'
const About = () => {
  return (
    <div>
        <section className="about-section py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={shop} alt="About Shopping Cart" className="img-fluid rounded"/>
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">About Online Shop</h2>
          <p className="lead">Welcome to Online Shop, your number one source for all things [Products]. We're dedicated to providing you the best shopping experience, with a focus on quality, customer service, and uniqueness.</p>
          <p>Founded in [Year] by [Founder Name], Shopping Cart has come a long way from its beginnings in [Location]. When [Founder Name] first started out, [his/her/their] passion for [Product Category] drove them to start their own business.</p>
          <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
          <p className="font-weight-bold">Sincerely, <br/> The Online Shop Team</p>
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default About
