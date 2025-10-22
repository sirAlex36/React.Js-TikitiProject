import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

useEffect(() => {
  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:3001/events');
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
    <div>
      <div className="container text-center my-5">
        <h1>Upcoming Events</h1>
      </div>

      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="row">
          {events.map((event) => (
            <div className="col-md-3 mb-4" key={event.id}>
              <div className="card" style={{ maxWidth: '350px' }}>
                <img
                  src={event.image}
                  className="card-img-top"
                  alt={event.name}
                  style={{
                    height: "250px",      
                    objectFit: "cover"    
                  }}
                />

                <div className="card-body">
                  <h5 className="card-title">{event.name}</h5>
                  <p className="card-text">
                    {event.date} | {event.location}
                  </p>
                  <button
                    className="btn btn-warning text-dark fw-bold"
                    onClick={() => handleBuyClick(event.id)}
                  >
                    Buy Tickets
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
