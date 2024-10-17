import React from 'react'

const Contact = () => {
  return (
    <div>
    

    <div className="container my-2">
        <h1 className="text-center">Contact Us</h1>
        <p className="text-center mb-4">Have questions? We'd love to hear from you!</p>

        <div className="row">
            <div className="col-md-6">
                <form>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label for="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

            <div className="col-md-6">
                <h5>Our Address</h5>
                <p>123 eCommerce St, Online City, Internet 56789</p>

                <h5>Email Us</h5>
                <p><a href="mailto:support@ecommerce.com">support@ecommerce.com</a></p>

                <h5>Call Us</h5>
                <p>+1 800 123 4567</p>

                <h5>Follow Us</h5>
                <div className="d-flex">
                    <a href="#" className="btn btn-primary me-2"><i className="bi bi-facebook"></i> Facebook</a>
                    <a href="#" className="btn btn-info me-2"><i className="bi bi-twitter"></i> Twitter</a>
                    <a href="#" className="btn btn-danger"><i className="bi bi-instagram"></i> Instagram</a>
                </div>
            </div>
        </div>
    </div>

 
    </div>
  )
}

export default Contact
