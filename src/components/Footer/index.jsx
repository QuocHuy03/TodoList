const Footer = () => {
  return (
    <div
      className="container-fluid mt-4"
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
