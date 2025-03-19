import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Get in Touch</h3>
            <p>Ready to take your business to the next level? Contact us today to learn how our Digital Marketing and Software Development services can help you achieve your goals. Let’s create a brighter digital future for your business!</p>
            <ul>
                <li> <img src={mail_icon} alt="" />Contactus@metamindsgroup.net </li>
                <li><img src={phone_icon} alt="" />+919599508106 (India), +1 (617) 395-8081 USA</li>
                <li><img src={location_icon} alt="" />Atlanta, GA, USA <br></br> 160 H Block Sector 63 Noida, India </li>
            </ul>
        </div>

    </div>
  )
}

export default Contact