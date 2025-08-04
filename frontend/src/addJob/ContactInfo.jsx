import React from "react";

const ContactInfo = ({ form, handleChange }) => {
  return (
    <>
      <h3>Contact Info</h3>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
        {/* Left Column */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <label htmlFor="companyName">Company Name:</label>
          <br />
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="phone">Phone:</label>
          <br />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="address">Address:</label>
          <br />
          <textarea
            id="address"
            name="address"
            rows="2"
            cols="50"
            value={form.address}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="city">City:</label>
          <br />
          <input
            type="text"
            id="city"
            name="city"
            value={form.city}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="state">State:</label>
          <br />
          <input
            type="text"
            id="state"
            name="state"
            value={form.state}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="zipcode">Zipcode/Postcode:</label>
          <br />
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            value={form.zipcode}
            onChange={handleChange}
            required
          />
        </div>

        {/* Right Column */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <label htmlFor="country">Country:</label>
          <br />
          <input
            type="text"
            id="country"
            name="country"
            value={form.country}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="latitude">Latitude:</label>
          <br />
          <input
            type="text"
            id="latitude"
            name="latitude"
            value={form.latitude}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="longitude">Longitude:</label>
          <br />
          <input
            type="text"
            id="longitude"
            name="longitude"
            value={form.longitude}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="emailAddress">Email Address:</label>
          <br />
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={form.emailAddress}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="website">Website:</label>
          <br />
          <input
            type="url"
            id="website"
            name="website"
            value={form.website}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
