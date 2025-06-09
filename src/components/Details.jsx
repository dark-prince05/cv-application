import { useState } from "react";
import GenInfo from "./GenInfo.jsx";
import Preview from "./Preview.jsx";
import EduInfo from "./EduInfo.jsx";
import SkillInfo from "./SkillInfo.jsx";
import ExpInfo from "./ExpInfo.jsx";
import ObjInfo from "./ObjInfo.jsx";
import CertInfo from "./CertInfo.jsx";

function Details() {
  const [genDetails, updateGenDetails] = useState({
    name: "John Doe",
    github: "john-doe",
    phone: "2882882882",
    email: "johndoe@example.com",
    linkedIn: "linkedin.com/john-doe",
  });

  const [eduDetails, updateEduDetails] = useState({
    degName: "Bachelor of Engineering in Computer Science",
    clgName: "Odin University",
    year: "2022 - 2025",
  });

  const [skillDetails, updateSkillDetails] = useState({
    techSkill: "Java, JavaScript, SQL",
    softSkill: "Git, GitHub, NeoVIM",
    analyticalSkill: "Critical Thinking, Problem Solving",
  });

  const [expDetails, updateExpDetails] = useState({
    compName: "Odin Corporation",
    pos: "Full Stack Developer",
    startDate: "15-04-2025",
    endDate: "31-09-2026",
    desc: "A Full Stack Developer builds both front-end and back-end parts of web applications, manages databases, ensures security, handles deployment, and collaborates with teams to create efficient, user-friendly solutions.",
  });

  const [objDetails, updateObjDetails] = useState(
    "Enthusiastic and motivated final-year Computer Science student, continuously expanding knowledge in frontend development. Proficient in frontend technologies like HTML, CSS, JavaScript, and React.js, with a solid foundation in Java. Eager to apply my skills and learning mindset in a collaborative environment to contribute to impactful software solutions.",
  );

  const [certDetails, updateCertDetails] = useState({
    certName: "Java Programming 1 & 2",
    certYear: "2022",
  });

  return (
    <div className="details">
      <div className="user-info">
        <ObjInfo objDetails={objDetails} updateObjDetails={updateObjDetails} />
        <GenInfo genDetails={genDetails} updateGenDetails={updateGenDetails} />
        <EduInfo eduDetails={eduDetails} updateEduDetails={updateEduDetails} />
        <SkillInfo
          skillDetails={skillDetails}
          updateSkillDetails={updateSkillDetails}
        />
        <ExpInfo expDetails={expDetails} updateExpDetails={updateExpDetails} />
        <CertInfo
          certDetails={certDetails}
          updateCertDetails={updateCertDetails}
        />
      </div>
      <div className="preview">
        <Preview
          genDetails={genDetails}
          objDetails={objDetails}
          eduDetails={eduDetails}
          skillDetails={skillDetails}
          expDetails={expDetails}
          certDetails={certDetails}
        />
      </div>
    </div>
  );
}

export default Details;
