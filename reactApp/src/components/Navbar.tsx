const Navbar = () => {
  return (
    <nav className="navbar navbar-expand" style={{ backgroundColor: '#4c7273' }}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src="https://i.pinimg.com/236x/d4/df/50/d4df5074d6c32cd5554dcbfed8bffb50.jpg" alt="TEST" width="40" height="40"/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#" style={{ color: '#d0d6d6' }}>Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#" style={{ color: '#d0d6d6' }}>TEST</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#" style={{ color: '#d0d6d6' }}>TEST2</a>
        </li>
      </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar