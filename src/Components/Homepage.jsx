import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Homepage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3002/events")
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

  const handleBuyClick = () => {
    navigate("/UpcomingEvents");
  };

  return (
    <motion.div
      className="text-center my-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <motion.section
        className="container py-5"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
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

          <motion.div
            className="position-relative z-2 d-flex flex-column justify-content-center align-items-center h-100"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="fw-bold display-5 mb-3">
              We Plug You With Event Tickets!
            </h1>
            <p className="fs-5 mb-4">Ticketing with ease!</p>

            <motion.div
              className="container w-75 mt-3 d-flex justify-content-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
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
            </motion.div>

            {results.length > 0 && (
              <motion.div
                className="bg-white text-dark mt-4 rounded p-3 shadow"
                style={{
                  maxWidth: "600px",
                  width: "100%",
                  maxHeight: "250px",
                  overflowY: "auto",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h5 className="fw-bold mb-3 text-center">Search Results</h5>
                {results.map((event) => (
                  <motion.div
                    key={event.id}
                    className="border-bottom pb-2 mb-2 text-start"
                    style={{ lineHeight: "1.2", cursor: "pointer" }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => navigate(`/card/${event.id}`)}
                  >
                    <h6 className="fw-bold mb-1 text-primary">{event.name}</h6>
                    <small className="text-muted d-block">
                      📍 {event.location} — 📅 {event.date}
                    </small>
                    <p className="mb-1">{event.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.section>


      <motion.section
        className="container py-5"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="p-4 bg-white border rounded shadow-sm">
          <h2 className="fw-bold mb-4 text-primary">
            Why Ticketing with <span className="text-warning">Tikiti</span> is Effortless
          </h2>

          <ul className="list-unstyled text-start">
            {[
              {
                img: "https://img.icons8.com/fluency/48/ok.png",
                title: "Simple & Fast Booking",
                text: "Get your tickets in seconds with our one-step checkout process.",
              },
              {
                img: "https://img.icons8.com/fluency/48/wallet.png",
                title: "Secure Payments",
                text: "Pay safely through M-Pesa, cards, or other integrated systems — no hassle.",
              },
              {
                img: "https://img.icons8.com/fluency/48/event-accepted.png",
                title: "Instant Confirmation",
                text: "Receive your e-ticket instantly via email or SMS after payment.",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                className="mb-4 d-flex"
                whileHover={{ scale: 1.03 }}
              >
                <img src={item.img} alt={item.title} className="me-3" />
                <div>
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="text-muted mb-0">{item.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <p className="mt-4 text-secondary">
            <strong>Tikiti</strong> makes attending your favorite events smooth, safe, and fun — just the way it should be!
          </p>

          <motion.button
            className="btn btn-warning text-dark fw-semibold mt-3"
            whileHover={{ scale: 1.1 }}
            onClick={handleBuyClick}
          >
            Get Your Ticket Now
          </motion.button>
        </div>
      </motion.section>

      <motion.section
        className="container py-5"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="fw-bold mb-5 text-primary">
          What Makes us <span className="text-warning">Efficient?</span>
        </h2>

        <div className="row g-4">
          {[
            {
              img: "https://img.icons8.com/color/96/clock--v1.png",
              title: "Super Efficient",
              text: "Get your tickets in seconds. Our optimized checkout ensures instant confirmation.",
            },
            {
              img: "https://img.icons8.com/color/96/easy.png",
              title: "Ultra Convenient",
              text: "Browse, book, and manage your tickets easily — all from one dashboard.",
            },
            {
              img: "https://img.icons8.com/color/96/customer-support.png",
              title: "Reliable Support",
              text: "Our support team is available 24/7 to ensure a smooth experience from purchase to entry.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="col-md-4"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,0,0,0.2)" }}
            >
              <div className="bg-light rounded-3 p-4 shadow-sm h-100">
                <img
                  src={card.img}
                  alt={card.title}
                  className="mb-3"
                  style={{ width: "80px" }}
                />
                <h4 className="fw-semibold mb-3">{card.title}</h4>
                <p>{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Homepage;
