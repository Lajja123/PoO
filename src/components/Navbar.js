import react from 'react'
import user from "../assests/images/man.png"
import "../components/navbar.css"


function Navbar(){
    return(
    <>
    
    <div className="main-header">
        <div className="header-container">
            
          <div className="main-logo">
            <div className="logo">
              <img src={user} className="logo-navbar" />
            </div>
          </div>
          <div className="left-navbar">
            <div className="navigation">
              
              <ul className="navigation-menu">
                <li className="submenu home-nav">Currently Owned NFT's</li>
                <li className="submenu">Previously Owned NFT'ss</li>
                <li className="submenu">Ownership Certificate</li>
              </ul>
            </div>
            <div className='user-img'>
            <img
                            class="p-user"
                            src={user}
                            alt="Rounded avatar"
                           
                          />                </div>            
            <div className="download-btn">
              

                <button className="button">Logout</button>
              
            </div>
          </div>
        </div>
      </div>
      
      
    </>
    )
}

export default Navbar;