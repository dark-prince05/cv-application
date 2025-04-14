import { useState } from "react";

function EduInfo({ eduDetails, updateEduDetails }) {
  let degName = eduDetails.degName;
  let clgName = eduDetails.clgName;
  let year = eduDetails.year;

  const handleAction = (e) => {
    e.preventDefault();
    updateEduDetails({
      degName: degName.trim() ? degName.trim() : eduDetails.degName,
      clgName: clgName.trim() ? clgName.trim() : eduDetails.clgName,
      year: year.trim() ? year.trim() : eduDetails.year,
    });
  };

  return (
    <div className="edu-details">
      <form onSubmit={handleAction}>
        <h2>Education</h2>
        <div>
          <label> Degree:</label>
          <br />
          <input
            placeholder="Bachelor of Engineering in Computer Science"
            type="text"
            onChange={(e) => (degName = e.target.value)}
          />
        </div>
        <div>
          <label> College:</label>
          <br />
          <input
            placeholder="Odin University"
            type="text"
            onChange={(e) => (clgName = e.target.value)}
          />
        </div>
        <div>
          <label> Year:</label>
          <br />
          <input
            placeholder="2022 - 2025"
            type="tel"
            onChange={(e) => (year = e.target.value)}
          />
        </div>
        <button className="btn">Save</button>
      </form>
    </div>
  );
}

export default EduInfo;
