const Footer = () => {
  return (
    <div
      className="container-fluid"
      style={{ position: "fixed", bottom: 0, left: 0, right: 0, width: "100%"  }}
    >
      <div
        className="row border-top d-flex justify-content-between text-center"
        style={{ padding: "1rem" }}
      >
        <div className="col">
          <span>3 Task</span>
        </div>
        <div className="col">
          <span>0 Complete</span>
        </div>
        <div className="col">
          <span>3 Open</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
