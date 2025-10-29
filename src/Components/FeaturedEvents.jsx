import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function FeaturedEvents() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3002/events")
      .then((res) => res.json())
      .then((data) => {
        const popularEvents = data.filter((event) => event.popular === true);
        setEvents(popularEvents);
      })
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  const handleBuyClick = (eventId) => {
    navigate(`/card/${eventId}`);
  };

  return (
    <section className="container my-5">
      <motion.h2
        className="text-center mb-4 fw-bold text-dark"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎉 Popular Events
      </motion.h2>

      <div className="row">
        {events.length > 0 ? (
          events.map((event, index) => (
            <motion.div
              key={event.id}
              className="col-md-4 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="card shadow-sm border-0 h-100"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.img
                  src={event.image}
                  alt={event.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{event.name}</h5>
                  <p className="card-text text-muted mb-1">
                    📍 {event.location}
                  </p>
                  <p className="card-text text-muted">🗓️ {event.date}</p>
                  <button
                    className="btn btn-warning text-dark fw-bold w-100"
                    onClick={() => handleBuyClick(event.id)}
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-muted">No featured events available.</p>
        )}
      </div>
    </section>
  );
}

export default FeaturedEvents;

