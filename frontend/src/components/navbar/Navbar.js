import './Navbar.css'

const Navbar = () => {
  const padding = {
    padding: 10
  }

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <a className="navbar-item" style={padding} href="/home">Home</a>
        <a className="navbar-item" style={padding} href="/restaurants">Add a Restaurant</a>
      </div>
    </div>
  )
}

export default Navbar