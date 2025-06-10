function CertInfo({ certDetails, updateCertDetails }) {
  let certificate = "";
  let certYear = "";

  const handleSave = (e) => {
    e.preventDefault();
    const ind = certDetails.length - 1;
    const updated = {
      id: certDetails[ind].id,
      certName: certificate.trim() || certDetails[ind].certName,
      certYear: certYear.trim() || certDetails[ind].certYear,
    };

    const newCertDetails = [...certDetails];
    newCertDetails[ind] = updated;

    updateCertDetails(newCertDetails);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ind = certDetails.length - 1;
    const newCert = {
      id: certDetails[ind].id + 1,
      certName: certificate.trim() || certDetails[ind].certName,
      certYear: certYear.trim() || certDetails[ind].certYear,
    };

    const newCertDetails = [...certDetails];
    newCertDetails.push(newCert);

    updateCertDetails(newCertDetails);
  };

  return (
    <div className="cert-details">
      <form>
        <h2>Certficates</h2>
        <div>
          <label> Certificate Name:</label>
          <br />
          <input
            placeholder="Java Programming 1 & 2"
            type="text"
            onChange={(e) => (certificate = e.target.value)}
          />
        </div>
        <div>
          <label> Year:</label>
          <br />
          <input
            placeholder="2022"
            type="text"
            onChange={(e) => (certYear = e.target.value)}
          />
        </div>
        <div className="btns">
          <button className="btn" onClick={handleAdd}>
            Add
          </button>
          <button className="btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default CertInfo;
