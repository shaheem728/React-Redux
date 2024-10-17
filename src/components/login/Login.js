import React from 'react';

const Login = ({ show, onClose }) => {
  return (
    <div>
      <div
        className={`modal fade ${show ? 'show' : ''}`}
        tabIndex="-1"
        style={{ display: show ? 'block' : 'none' }}
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <div class="input-group">
                    <span class="input-group-text"><i class="bi bi-person-circle"></i></span>
                    <input type="text" placeholder="First and last name" class="form-control" />
                  </div>
                </div>
                <div className="mb-3">
                <div class="input-group">
                    <span class="input-group-text"> <i class="bi bi-telephone"></i></span>
                    <input type="tel" placeholder="Mobile number" class="form-control" />
                  </div>
                </div>
                <div className="mb-3">
                <div class="input-group">
                    <span class="input-group-text"> <i class="bi bi-key"></i></span>
                    <input type="password" placeholder="At least 6 characters" class="form-control" />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
              <button type="button" className="btn btn-primary"onClick={onClose}>Login</button>
            </div>
          </div>
        </div>
      </div>
      {show && <div className="modal-backdrop fade show" onClick={onClose}></div>}
    </div>
  );
}

export default Login;
