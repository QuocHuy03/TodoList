const Header = () => {
  return (
    <div className="container-fluid">
      <div
        className="row border-bottom"
        style={{ padding: "1rem", overflowX: "hidden" }}
      >
        <div className="col-2 d-flex d-sm-none align-items-center justify-content-center">
          <span>
            <i className="fa-solid fa-align-justify" />
          </span>
        </div>
        <div className="col-8 col-sm-6 d-flex align-items-center justify-content-center justify-content-sm-start">
          <img
            src="https://i.imgur.com/bbnrc1T.png"
            alt="Logo"
            height={32}
            width={34}
            className="ms-3 me-3"
          />
        </div>
        <div className="col-8 col-sm-6 d-none d-sm-flex align-items-start justify-content-end">
          <span>Logout</span>
        </div>
 
      </div>
    </div>
  );
};

export default Header;
