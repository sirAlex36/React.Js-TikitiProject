import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error loading events:", err));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = events.filter(
      (event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
  };
  const handleBuyClick = (eventId) => {
    navigate(`/UpcomingEvents/${eventId}`);
  };

  return (
    <div className="text-center my-5">


      <section className="container py-5">
        <div
          className="position-relative rounded shadow overflow-hidden text-white text-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/1200x/ae/d2/4c/aed24c60a70ef49d0be300219f053918.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "550px",
          }}
        >

          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          ></div>


          <div className="position-relative z-2 d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="fw-bold display-5 mb-3">
              We Plug You With Event Tickets!
            </h1>
            <p className="fs-5 mb-4">Ticketing with ease!</p>


            <div className="container w-75 mt-3 d-flex justify-content-center gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search for events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ maxWidth: "400px", borderRadius: "8px" }}
              />
              <button
                className="btn btn-warning text-dark fw-bold"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>


            {results.length > 0 && (
              <div
                className="bg-white text-dark mt-4 rounded p-3 shadow"
                style={{
                  maxWidth: "600px",
                  width: "100%",
                  maxHeight: "250px",
                  overflowY: "auto",
                }}
              >
                <h5 className="fw-bold mb-3 text-center">Search Results</h5>
                {results.map((event) => (
                  <div
                    key={event.id}
                    className="border-bottom pb-2 mb-2 text-start"
                    style={{ lineHeight: "1.2" }}
                  >
                    <h6 className="fw-bold mb-1">{event.name}</h6>
                    <small className="text-muted d-block">
                      📍 {event.location} — 📅 {event.date}
                    </small>
                    <p className="mb-1">{event.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>


      <section className="container py-5">
        <div className="p-4 bg-white border rounded shadow-sm">
          <h2 className="fw-bold mb-4 text-primary">
            Why Ticketing with <span className="text-warning">Tikiti</span> is Effortless
          </h2>

          <ul className="list-unstyled text-start">
            <li className="mb-4 d-flex">
              <img
                src="https://img.icons8.com/fluency/48/ok.png"
                alt="Easy Booking"
                className="me-3"
              />
              <div>
                <h5 className="mb-1">Simple & Fast Booking</h5>
                <p className="text-muted mb-0">
                  Get your tickets in seconds with our one-step checkout process.
                </p>
              </div>
            </li>

            <li className="mb-4 d-flex">
              <img
                src="https://img.icons8.com/fluency/48/wallet.png"
                alt="Secure Payments"
                className="me-3"
              />
              <div>
                <h5 className="mb-1">Secure Payments</h5>
                <p className="text-muted mb-0">
                  Pay safely through M-Pesa, cards, or other integrated systems — no hassle.
                </p>
              </div>
            </li>

            <li className="mb-4 d-flex">
              <img
                src="https://img.icons8.com/fluency/48/event-accepted.png"
                alt="Instant Confirmation"
                className="me-3"
              />
              <div>
                <h5 className="mb-1">Instant Confirmation</h5>
                <p className="text-muted mb-0">
                  Receive your e-ticket instantly via email or SMS after payment.
                </p>
              </div>
            </li>
          </ul>

          <p className="mt-4 text-secondary">
            <strong>Tikiti</strong> makes attending your favorite events smooth, safe, and fun —
            just the way it should be!
          </p>

          <button className="btn btn-warning text-dark fw-semibold mt-3"
            onClick={() => handleBuyClick()}>
            Get Your Ticket Now
          </button>
        </div>
      </section>


      <section className="container py-5">
        <h2 className="fw-bold mb-5 text-primary">
          What Makes us <span className="text-warning">Efficient?</span>
        </h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="bg-light rounded-3 p-4 shadow-sm h-100 hover-shadow transition-all">
              <img
                src="https://img.icons8.com/color/96/clock--v1.png"
                alt="Efficiency"
                className="mb-3"
                style={{ width: "80px" }}
              />
              <h4 className="fw-semibold mb-3">Super Efficient</h4>
              <p>
                Get your tickets in seconds. Our optimized checkout ensures instant confirmation.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="bg-light rounded-3 p-4 shadow-sm h-100 hover-shadow transition-all">
              <img
                src="https://img.icons8.com/color/96/easy.png"
                alt="Convenience"
                className="mb-3"
                style={{ width: "80px" }}
              />
              <h4 className="fw-semibold mb-3">Ultra Convenient</h4>
              <p>
                Browse, book, and manage your tickets easily — all from one dashboard.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="bg-light rounded-3 p-4 shadow-sm h-100 hover-shadow transition-all">
              <img
                src="https://img.icons8.com/color/96/customer-support.png"
                alt="Support"
                className="mb-3"
                style={{ width: "80px" }}
              />
              <h4 className="fw-semibold mb-3">Reliable Support</h4>
              <p>
                Our support team is available 24/7 to ensure a smooth experience from purchase to entry.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Homepage;
