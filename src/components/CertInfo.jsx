function CertInfo({ certDetails, updateCertDetails }) {
  let certificate = certDetails.certName;
  let certYear = certDetails.certYear;

  const handleAction = (e) => {
    e.preventDefault();
    updateCertDetails({
      certName: certificate.trim() ? certificate.trim() : certDetails.certName,
      certYear: certYear.trim() ? certYear.trim() : certDetails.certYear,
    });
  };

  return (
    <div className="cert-details">
      <form onSubmit={handleAction}>
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
        <button className="btn">Save</button>
      </form>
    </div>
  );
}

export default CertInfo;
