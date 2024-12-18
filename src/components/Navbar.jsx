import { FaBitcoinSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg px-5 top" style={{backgroundColor:'rgba(255, 255, 255, 0.1)', position:"fixed", top:'0', zIndex:'100', width:'100%', borderBottom:' 1px solid #007aff', borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px', height:'10vh', backdropFilter:'blur(10px) @media (max-width: 768px){width:100vw;}'}}>
  <div className="container-fluid">
    <FaBitcoinSign style={{ height: '30px', width: '30px', rotate: '350deg', color:'#f4f4f4' }} />
    <Link className="navbar-brand" to="/" style={{color:"#f4f4f4", fontWeight:'bold'}}>CryptoVerse</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color:'#f4f4f4',backgroundColor:'#f4f4f4'}}>
      <span className="navbar-toggler-icon" style={{color:'#f4f4f4',backgroundColor:'#f4f4f4'}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{color:'grey'}}>
        <li className="nav-item">
          <Link className="nav-link hover-white active" aria-current="page" to="/" style={{color:'grey', fontWeight:'bold'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link hover-white active" to="/exchanges" style={{color:'grey', fontWeight:'bold'}}>Exchanges</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link hover-white active" to="/about" style={{color:'grey', fontWeight:'bold'}}>About Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar