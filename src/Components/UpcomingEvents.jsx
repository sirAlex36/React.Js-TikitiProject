import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 

function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3002/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleBuyClick = (eventId) => {
    navigate(`/card/${eventId}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container text-center my-5">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Upcoming Events
        </motion.h1>
      </div>

      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="row">
          {events.map((event, index) => (
            <motion.div
              className="col-md-3 mb-4"
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="card"
                whileHover={{ scale: 1.05 }}
                style={{ maxWidth: '350px' }}
              >
                <motion.img
                  src={event.image}
                  className="card-img-top"
                  alt={event.name}
                  style={{
                    height: '250px',
                    objectFit: 'cover',
                  }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="card-body">
                  <h5 className="card-title">{event.name}</h5>
                  <p className="card-text">
                    {event.date} | {event.location}
                  </p>
                  <motion.button
                    className="btn btn-warning text-dark fw-bold"
                    onClick={() => handleBuyClick(event.id)}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{
                      backgroundColor: '#ffcc00',
                      transition: { duration: 0.3 },
                    }}
                  >
                    Buy Tickets
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default UpcomingEvents;

