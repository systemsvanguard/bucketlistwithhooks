// src/components/ContactForm.js 
import React from 'react'

const ContactForm = () => {
  return (
    <div className="pageStyle">
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="text" placeholder="Your Full Name please" />
          <span className="icon is-small is-left has-text-link">
            <i className="fas fa-user-tie"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" />
          <span className="icon is-small is-left has-text-link">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input is-link" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone - e.g. 905-791-7800" />
          <span className="icon is-small is-left has-text-link">
            <i className="fas fa-phone"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>

      <div className="field">
        <label className="label">Your Message</label>
        <div className="control has-icons-left has-icons-right">
          <textarea className="textarea is-info is-small" rows="2" placeholder="         Your Message"  ></textarea>
          <span className="icon is-small is-left has-text-danger">
          <i className="fas fa-pencil-alt"></i>
          </span>
        </div>
      </div>
      <div className="field is-grouped is-grouped-right">
        <p className="control">
          <button className="button is-link is-large" type="submit">
          <span className="icon"><i className="far fa-check-circle"></i></span>
          <span> Send </span>
          </button>
        </p>
      </div>
      <br />
	</div>
  )
}
  
export default ContactForm 