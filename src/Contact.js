import React from "react";
import "./App.css";
import "./Contact.css";
import ZuriIcon from "./ZuriIcon.svg";
import I4GIcon from "./I4GIcon.svg";

function Contact() {
  return (
    <>
      <div id="contact-me-container">
        <div id="inner-container">
          <div id="contact-header">
            <h2 id="contact-me">Contact Me</h2>
            <p id="contact-me-text">
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>
          <div id="form-container">
            <form>
              <div id="name-row" className="inputs">
                <div id="first-name-container">
                  <label>First name</label>
                  <input
                    id="first_name"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div id="second-name-container">
                  <label>Last name</label>
                  <input
                    id="last_name"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div id="email" className="inputs">
                <label>Email</label>
                <input type="email" placeholder="yourname@email.com" required />
              </div>
              <div id="message" className="inputs">
                <label>Message</label>
                <textarea
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                  required
                />
              </div>
              <div id="checkbox-area" className="inputs">
                <input type="checkbox" id="checkbox" required />
                <p>
                  You agree to providing your data to Simeon Offiong who may
                  contact you.
                </p>
              </div>
              <div id="submit-btn-section" className="inputs">
                <button id="btn__submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
        <div className="horizontal_line" />
        <div className="footer">
          <div>
            <img src={ZuriIcon} alt="zuriLogo" />
          </div>
          <div>
            <p>HNG Internship 9 Frontend Task</p>
          </div>
          <div>
            <img src={I4GIcon} alt="I4GLogo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
