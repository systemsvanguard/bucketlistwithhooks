import React from 'react'

const ContactDetails = () => {
  return (
    <div className="pageStyle">

	  <p>
      <span className="icon has-text-link"> <i className="fas fa-map-marker-alt"></i></span> Brampton, Ontario, Canada<br />
      <span className="icon has-text-link"> <i className="fas fa-phone"></i></span> Phone: <strong>416-312-9703</strong><br />
      <span className="icon has-text-link"> <i className="fas fa-envelope"></i></span> Email: <strong>ryan @ RyanHunter.org</strong><br />
      <span className="icon has-text-link"> <i className="fab fa-github-alt"></i></span> <a href="https://github.com/systemsvanguard" className="link_no_underline">GitHub</a><br />
      <span className="icon has-text-link"> <i className="fab fa-linkedin"></i></span> <a href="https://www.linkedin.com/in/ryan-hunter-4a166013/" className="link_no_underline">LinkedIn</a><br />
    </p>
    <br />
	</div>
  )
}
 
export default ContactDetails 