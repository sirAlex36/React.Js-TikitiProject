import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Homepage from "./Components/Homepage.jsx";
import UpcomingEvents from "./Components/UpcomingEvents.jsx";
import Contact from "./Components/Contact.jsx";
import SignIn from "./Components/SignIn.jsx";
import SignUp from "./Components/SignUp.jsx";
import Card from "./Components/Card.jsx";
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <Header />


      <div className="flex-grow-1">

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/UpcomingEvents" element={<UpcomingEvents />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/card/:eventId" element={<Card />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
