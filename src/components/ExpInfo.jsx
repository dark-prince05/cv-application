function ExpInfo({ expDetails, updateExpDetails }) {
  let compName = expDetails.compName;
  let pos = expDetails.pos;
  let startDate = expDetails.startDate;
  let endDate = expDetails.endDate;
  let desc = expDetails.desc;

  const handleAction = (e) => {
    e.preventDefault();
    updateExpDetails({
      compName: compName.trim() ? compName.trim() : expDetails.compName,
      pos: pos.trim() ? pos.trim() : expDetails.pos,
      startDate: startDate ? startDate : expDetails.startDate,
      endDate: endDate ? endDate : expDetails.endDate,
      desc: desc.trim() ? desc.trim() : expDetails.desc,
    });
  };

  return (
    <div className="exp-details">
      <form onSubmit={handleAction}>
        <h2>Experience</h2>
        <div>
          <label> Company:</label>
          <br />
          <input
            placeholder="Odin Corporation"
            type="text"
            onChange={(e) => (compName = e.target.value)}
          />
        </div>
        <div>
          <label> Position:</label>
          <br />
          <input
            placeholder="Full Stack Developer"
            type="text"
            onChange={(e) => (pos = e.target.value)}
          />
        </div>
        <div>
          <label> Start Date:</label>
          <br />
          <input type="date" onChange={(e) => (startDate = e.target.value)} />
        </div>
        <div>
          <label> End Date:</label>
          <br />
          <input type="date" onChange={(e) => (endDate = e.target.value)} />
        </div>
        <div>
          <label> Description:</label>
          <br />
          <textarea
            placeholder="Type your message...."
            onChange={(e) => (desc = e.target.value)}
            row={9}
          />
        </div>
        <button className="btn">Save</button>
      </form>
    </div>
  );
}

export default ExpInfo;
