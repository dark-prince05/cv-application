import { useState } from "react";

function Preview({ genDetails, eduDetails, skillDetails, expDetails }) {
  return (
    <div>
      <div className="cv-sheet">
        <div className="gen-info">
          <h2>{genDetails.name}</h2>
          <p>GitHub: {genDetails.github}</p>
          <p>Email: {genDetails.email}</p>
          <p>
            {genDetails.phone} | {genDetails.linkedIn}
          </p>
        </div>
        <div className="edu-info">
          <h4>Education</h4>
          <hr style={{ margin: ".4rem 0" }} />
          <div>
            <p>
              {eduDetails.degName}, {eduDetails.clgName}
            </p>
            <p> {eduDetails.year}</p>
          </div>
        </div>
        <div className="skill-info">
          <h4>Skills</h4>
          <hr style={{ margin: ".4rem 0" }} />
          <p>
            <span> Technical Skills:</span> {skillDetails.techSkill}
          </p>
          <p>
            <span> Soft Skills:</span> {skillDetails.softSkill}
          </p>
          <p>
            <span> Analytical Skills:</span> {skillDetails.analyticalSkill}
          </p>
        </div>
        <div className="exp-info">
          <h4>Experience</h4>
          <hr style={{ margin: ".4rem 0" }} />
          <div>
            <p>
              <span>Company:</span> {expDetails.compName}
            </p>
            <p>
              {expDetails.startDate} - {expDetails.endDate}
            </p>
          </div>
          <p>
            <span>Role:</span> {expDetails.pos}
          </p>
          <p>{expDetails.desc}</p>
        </div>
      </div>
    </div>
  );
}
export default Preview;
