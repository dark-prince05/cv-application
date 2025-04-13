import { useState } from "react";

function GenInfo({ genDetails, updateGenDetails }) {
  let name = genDetails.name;
  let github = genDetails.github;
  let phone = genDetails.phone;
  let email = genDetails.email;
  let linkedIn = genDetails.linkedIn;

  const handleAction = (e) => {
    e.preventDefault();
    updateGenDetails({
      name: name.trim() ? name.trim() : genDetails.name,
      github: github.trim() ? github.trim() : genDetails.github,
      phone: phone.trim() ? phone.trim() : genDetails.phone,
      email: email.trim() ? email.trim() : genDetails.email,
      linkedIn: linkedIn.trim() ? linkedIn.trim() : genDetails.linkedIn,
    });
  };

  return (
    <div className="gen-details">
      <h1>CV Generator</h1>
      <form onSubmit={handleAction}>
        <h2>Personel Details</h2>
        <div>
          <label> Name:</label>
          <br />
          <input
            placeholder="John Doe"
            type="text"
            onChange={(e) => (name = e.target.value)}
          />
        </div>
        <div>
          <label> GitHub:</label>
          <br />
          <input
            placeholder="john-doe"
            type="text"
            onChange={(e) => (github = e.target.value)}
          />
        </div>
        <div>
          <label> Phone No:</label>
          <br />
          <input
            placeholder="2882882882"
            type="tel"
            onChange={(e) => (phone = e.target.value)}
          />
        </div>
        <div>
          <label> Email:</label>
          <br />
          <input
            placeholder="johndoe@example.com"
            type="email"
            onChange={(e) => (email = e.target.value)}
          />
        </div>
        <div>
          <label> LinkedIn:</label>
          <br />
          <input
            placeholder="linedin.com/john-doe"
            type="text"
            onChange={(e) => (linkedIn = e.target.value)}
          />
        </div>
        <button className="btn">Save</button>
      </form>
    </div>
  );
}

export default GenInfo;
