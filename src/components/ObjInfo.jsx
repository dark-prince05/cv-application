function ObjInfo({ objDetails, updateObjDetails }) {
  let objective = objDetails;

  const handleAction = (e) => {
    e.preventDefault();
    updateObjDetails((objDetails = objective.trim()));
  };

  return (
    <div className="obj-details">
      <h1>CV Generator</h1>
      <form onSubmit={handleAction}>
        <h2>Objective</h2>
        <textarea
          placeholder="Type your message...."
          onChange={(e) => (objective = e.target.value)}
          rows={9}
        />
        <button className="btn">Save</button>
      </form>
    </div>
  );
}

export default ObjInfo;
