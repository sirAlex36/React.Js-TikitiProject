import React from 'react';

function Footer() {
  return (
    <footer className="bg-secondary text-white py-4 mt-5" style={{ marginTop: 'auto' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Tikiti Yangu</h5>
            <p>Your trusted partner for event tickets</p>
          </div>
          <div className="col-md-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50">Home</a></li>
              <li><a href="#" className="text-white-50">Events</a></li>
              <li><a href="#" className="text-white-50">About</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Contact</h6>
            <p className="text-white-50 mb-1">Email: info@tikitiyangu.com</p>
            <p className="text-white-50">Phone: +254 700 000 000</p>
          </div>
        </div>
        <div className="text-center mt-3 pt-3 border-top border-white">
          <p className="mb-0 text-white-50">&copy; 2025 Tikiti Yangu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;