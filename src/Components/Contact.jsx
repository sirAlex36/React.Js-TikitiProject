import React from "react";

function Contact() {
  return (
    <div className="bg-warning p-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="bg-white p-4 rounded shadow">
              <h1 className="text-center mb-3">Contact Us</h1>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name:</label>
                  <input type="text" className="form-control" name="name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email:</label>
                  <input type="email" className="form-control" name="email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message:</label>
                  <textarea className="form-control" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;