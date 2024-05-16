import React from 'react'
import '../css/landing.css'
import { Link } from 'react-router-dom'
// import alarm\ watch from '../Assests/alarm watch.jpg'
const Landing = () => {
  return (
    <div className='landing'>

      <div className="landing-hero"></div>

      <div className="landing-item">

        <div className="landing-item-items">
          <div className="landing-item-img" style={{backgroundImage:'url("../Assests/alarm\ watch.jpg")'}}></div>
          <div className="landing-item-text">Alarm</div>
        </div>

        <div className="landing-item-items">
          <div className="landing-item-img" style={{backgroundImage:'url("../Assests/charger or battery.jpg")'}}></div>
          <div className="landing-item-text">Charger or Battery</div>
        </div>

        <div className="landing-item-items">
          <div className="landing-item-img" style={{backgroundImage:'url("../Assests/headphones.jpg")'}}></div>
          <div className="landing-item-text">Headphones</div>
        </div>

        <div className="landing-item-items">
          <div className="landing-item-img" style={{backgroundImage:'url("../Assests/speaker.jpg")'}}></div>
          <div className="landing-item-text">Speaker</div>
        </div>

        <div className="landing-item-items">
          <div className="landing-item-img" style={{backgroundImage:'url("../Assests/tv.jpg")'}}></div>
          <div className="landing-item-text">TV</div>
        </div>

        <div className="landing-item-items">
          <div className="landing-item-img" style={{backgroundImage:'url("../Assests/mobile.jpg")'}}></div>
          <div className="landing-item-text">Mobile</div>
        </div>

        <div className="landing-item-items">
          <div className="landing-item-img" style={{backgroundImage:'url("../Assests/laptop.jpg")'}}></div>
          <div className="landing-item-text">Laptop</div>
        </div>

        <div className="landing-item-items">
          <div className="landing-item-img" style={{backgroundImage:'url("../Assests/tablet.jpg")'}}></div>
          <div className="landing-item-text">Tablet</div>
        </div>

        <div className="landing-item-items">
          <div className="landing-item-img" style={{backgroundImage:'url("../Assests/smart-watch.jpg")'}}></div>
          <div className="landing-item-text">Smart Watch</div>
        </div>

        <div className="landing-item-items">
          <div className="landing-item-img" style={{backgroundImage:'url("../Assests/computer.jpg")'}}></div>
          <div className="landing-item-text">Computer</div>
        </div>

        <div className="landing-item-items">
          <div className="landing-item-img" style={{backgroundImage:'url("../Assests/cpu.jpg")'}}></div>
          <div className="landing-item-text">CPU</div>
        </div>

        <div className="landing-item-items">
          <div className="landing-item-img" style={{backgroundImage:'url("../Assests/mouse.jpg")'}}></div>
          <div className="landing-item-text">Mouse</div>
        </div>

        <div className="landing-item-items">
          <div className="landing-item-img" style={{backgroundImage:'url("../Assests/keyboard.jpg")'}}></div>
          <div className="landing-item-text">Keyboard</div>
        </div>

        <div className="landing-item-items">
          <div className="landing-item-img" style={{backgroundImage:'url("../Assests/remote.jpg")'}}></div>
          <div className="landing-item-text">Remote</div>
        </div>

        <div className="landing-item-items">
          <div className="landing-item-img" style={{backgroundImage:'url("../Assests/iron-img.jpg")'}}></div>
          <div className="landing-item-text">Iron</div>
        </div>

      </div>

      <div className="landing-back-to-top">Back-to-top</div>
      <div className="landing-footer">
        <div className="landing-footer-logo1" style={{backgroundImage: 'url("../Assests/8303673-removebg-preview.png")'}}></div>
        <div className="landing-footer-info" style={{color: 'rgb(224, 209, 209)'}}>
          <h1 style={{fontSize:'250%'}}>Repair</h1>
          <h1 style={{fontSize:'500%'}}>Store</h1>
          </div>
        <div className="landing-footer-info">
          <div>About</div>
          <div>Customer Support</div>
          <div>FAQ</div>
          <div>Terms & Conditions</div>
        </div>
        <div className="landing-footer-info">
          <div>Facebook</div>
          <div>Instagram</div>
          <div>Twitter</div>
          <div>Youtube</div>
        </div>
        <div className="landing-footer-info landing-footer-info-link">
         <div><Link to={'/home'}>Home</Link></div>
         <div><Link to={'/category'}>Category</Link></div>
         <div><Link to={'/signup'}>Sign up</Link></div>
         <div><Link to={'/contact'}>Contact</Link></div>
         <div> <Link to={'/about'}>About</Link></div>
        </div>
        <div className="landing-footer-logo1" style={{backgroundImage:'url("../Assests/energy-charger-logo-removebg-preview.png")'}}></div>

      </div>

    </div>
  ) 
}

export default Landing
