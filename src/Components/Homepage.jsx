import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

function Homepage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [events, setEvents] = useState([]);

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



  return (
    <div className="container text-center my-5">
      <h1>Welcome to Tikiti Yangu</h1>
      <p>Your one-stop platform for event tickets!</p>
      <div className="container w-50 mt-4" style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search for events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-warning text-dark fw-bold"
         onClick={handleSearch}>Search
         </button>

      </div>
          <div className="container mt-4 w-50 mx-auto">
        {results.length > 0 ? (
          <ul className="list-group">
            {results.map((event) => (
              <li key={event.id} className="list-group-item">
                <strong>{event.name}</strong> - {event.location}
              </li>
            ))}
          </ul>
        ) : (
          searchTerm && <p>No events found.</p>
        )}
      </div>
    </div>
  );
}
export default Homepage;
