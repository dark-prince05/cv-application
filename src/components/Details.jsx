import { useState } from "react";
import GenInfo from "./GenInfo.jsx";
import Preview from "./Preview.jsx";
import EduInfo from "./EduInfo.jsx";
import SkillInfo from "./SkillInfo.jsx";
import ExpInfo from "./ExpInfo.jsx";

function Details() {
  const [genDetails, updateGenDetails] = useState({
    name: "John Doe",
    github: "john-doe",
    phone: "2882882882",
    email: "johndoe@example.com",
    linkedIn: "linedin.com/john-doe",
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

  return (
    <div className="details">
      <div className="user-info">
        <GenInfo genDetails={genDetails} updateGenDetails={updateGenDetails} />
        <EduInfo eduDetails={eduDetails} updateEduDetails={updateEduDetails} />
        <SkillInfo
          skillDetails={skillDetails}
          updateSkillDetails={updateSkillDetails}
        />
        <ExpInfo expDetails={expDetails} updateExpDetails={updateExpDetails} />
      </div>
      <div className="preview">
        <Preview
          genDetails={genDetails}
          eduDetails={eduDetails}
          skillDetails={skillDetails}
          expDetails={expDetails}
        />
      </div>
    </div>
  );
}

export default Details;
