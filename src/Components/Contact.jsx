import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  })



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const contactSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3002/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      alert("Message sent successfully!");
      setFormData({
        Name: "",
        Email: "",
        Message: "",

      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="bg-white p-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="bg-white p-4 rounded shadow">
              <h1 className="text-center mb-3">Contact Us</h1>
              <form onSubmit={contactSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name:</label>
                  <input type="text" className="form-control" name="Name" value={formData.Name}
                    onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email:</label>
                  <input type="Email" className="form-control" name="Email" value={formData.Email}
                    onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message:</label>
                  <textarea className="form-control" name="Message" rows="4" value={formData.Message}
                    onChange={handleChange} required></textarea>
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