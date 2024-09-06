import React, { useEffect, useState } from 'react';
import './Heade.css'
import { Link } from 'react-router-dom';


function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const toggleNavBar = () => {
    setIsActive(!isActive);
  };

  const toggleNavBarHide = () => {
    setIsHidden(!isHidden);
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.navheader');
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
        <header className='navheader'>
    <div className="navbar">
       <div className="logo"><img src='assets/homeimg/logo.png' alt="" /></div>
       <div className={`nav ${isActive ? 'active' : ''} ${isHidden ? 'hide' : ''}`}>
        <div  className="btn-close1" onClick={toggleNavBarHide}><i className="fa-solid fa-xmark"></i></div>
        <div className="link">
      <li><Link to="/reserve">Reservation Policy</Link></li>
      <div className="line-bar"></div>
      <li><Link to="/faq">FAQ</Link></li>
      <div className="line-bar"></div>
      <li><Link to="/terms">Terms and Conditions</Link></li>
    </div>
        <ul className="menuBar">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/aboutus">About Us</Link></li>
      <li className="services-dropdown">
                <Link to={'/service'}> Services</Link>
                <ul className="dropdown-content">
                <li className='sugli'><Link to={'/service_cooperative'}>Cooporate Travel</Link></li>
                  <li className='sugli'><Link to={"/ticketpage"}>Foreign Exchange</Link></li>
                  <li className='sugli'><a href="/hotelpage">Hotel Booking</a></li>
                  <li className='sugli'><Link to={"/ticketpage"}>Ticketing</Link></li>
                  <li className='sugli'><Link to={"/ticketpage"}>Visa Assistance</Link></li>
                </ul>
              </li>
      <li><Link to="/booking">Booking</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contactus">Contact Us</Link></li>
    </ul>
      </div>
        <div className="bar"  onClick={toggleNavBar}><i className="fa-solid fa-bars"></i></div>
       </div>
       
</header>
    </>
  )
}

export default Header