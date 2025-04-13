function SkillInfo({ skillDetails, updateSkillDetails }) {
  let techSkill = skillDetails.techSkill;
  let softSkill = skillDetails.clgName;
  let analyticalSkill = skillDetails.analyticalSkill;

  const handleAction = (e) => {
    e.preventDefault();
    updateSkillDetails({
      techSkill: techSkill.trim() ? techSkill.trim() : skillDetails.techSkill,
      softSkill: softSkill.trim() ? softSkill.trim() : skillDetails.softSkill,
      analyticalSkill: analyticalSkill.trim()
        ? analyticalSkill.trim()
        : skillDetails.analyticalSkill,
    });
  };

  return (
    <div className="skill-details">
      <form onSubmit={handleAction}>
        <h2>Skills</h2>
        <div>
          <label> Technical Skills:</label>
          <br />
          <input
            placeholder="Java, JavaScript, SQL"
            type="text"
            onChange={(e) => (techSkill = e.target.value)}
          />
        </div>
        <div>
          <label> Soft Skills:</label>
          <br />
          <input
            placeholder="Git, GitHub, NeoVIM"
            type="text"
            onChange={(e) => (softSkill = e.target.value)}
          />
        </div>
        <div>
          <label> Analytical Skill:</label>
          <br />
          <input
            placeholder="Critical Thinking, Problem Solving"
            type="text "
            onChange={(e) => (analyticalSkill = e.target.value)}
          />
        </div>
        <button className="btn">Save</button>
      </form>
    </div>
  );
}

export default SkillInfo;
