import React from "react";
import './Contact.css'
// import { Form } from "react-router-dom";

function Contact() {
  return (
    <div>
      <form action="" className="contact-form">
        <h1 className="contact-title">Contact Us</h1>
        <input className="input gone" type="text" placeholder="First Name" />
        <input className="input gone" type="text" placeholder="Last Name" />
        <textarea className="gone message" name="" id="" cols="20" rows="10" placeholder="Write your message here" />
        <button className="submit-btn gone">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
