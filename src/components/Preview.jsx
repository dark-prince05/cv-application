import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const downloadResume = () => {
  const input = document.querySelector("#cv-preview");

  html2canvas(input, { scale: 3 }).then((canvas) => {
    const img = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  });
};

function Preview({
  genDetails,
  objDetails,
  eduDetails,
  skillDetails,
  expDetails,
  certDetails,
  handleCertRemove,
}) {
  return (
    <div className="right-container">
      <button className="download" onClick={downloadResume}>
        Download
      </button>
      <div className="cv-sheet" id="cv-preview">
        <div className="gen-info">
          <h2>{genDetails.name}</h2>
          <p>GitHub: {genDetails.github}</p>
          <p>Email: {genDetails.email}</p>
          <p>
            {genDetails.phone} | LinkedIn: {genDetails.linkedIn}
          </p>
        </div>
        <div className="obj-info">
          <h4>Objective</h4>
          <hr style={{ margin: ".4rem 0" }} />
          <div>
            <p>{objDetails}</p>
          </div>
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
        <div className="cert-info">
          <h4>Certificates</h4>
          <hr style={{ margin: ".4rem 0" }} />
          <div>
            {certDetails.map((certificates) => (
              <div key={certificates.id} className="delete-cert">
                <ul>
                  <li>
                    {certificates.certName} ({certificates.certYear})
                  </li>
                </ul>
                <p
                  className="remove-btn"
                  onClick={() => handleCertRemove(certificates.id)}
                >
                  x
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Preview;
