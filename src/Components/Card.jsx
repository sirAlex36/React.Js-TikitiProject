import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function Card() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

useEffect(() => {
  fetch(`http://localhost:3001/events/${Number(eventId)}`) 
    .then((res) => {
      if (!res.ok) throw new Error("Event not found");
      return res.json();
    })
    .then((data) => setEvent(data))
    .catch((error) => console.error("Error fetching event:", error));
}, [eventId]);


   if (!event) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h4>Loading event details...</h4>
      </div>
    );
  }




  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ maxWidth: "600px", width: "100%" }}>
        <img
          src={event.image}
          alt={event.name}
          className="card-img-top rounded"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h3 className="card-title mb-3">{event.name}</h3>
          <p className="text-muted mb-2">{event.date}</p>
          <p className="fw-semibold mb-3">{event.location}</p>
          <p className="card-text mb-3">{event.description}</p>
          <p className="mb-1">Organiser: <strong>{event.Organiser}</strong></p>
          <p className="mb-3 text-secondary">{event.Extras}</p>
          <p className="card-text mb-3">{event.Text}</p>
          <h5 className="text-success mb-3">{event.price}</h5>

          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-warning fw-bold text-dark">Buy Ticket</button>
            <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
              Back to Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

