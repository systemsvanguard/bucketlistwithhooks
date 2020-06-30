import React from 'react'
import Spacer from "../app/images/spacer.png";
import GoogleMaps from "../components/GoogleMaps"
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import CityHall from "../app/images/cityhall.jpg";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <h1 className="title has-text-link-dark">Contact Us</h1>
        <p className="title has-text-link is-italic is-size-5">
          <span className="icon has-text-link is-medium"> <i className="far fa-comment-dots fa-2x"></i></span>
          <img src={Spacer} alt="" />
          Let's chat! How can my web development & IT skills help you? Drop me a note below please.
        </p>
		<img src={CityHall} className="img_responsive" alt="City Hall" title="City Hall" />
        <p>Heave to capstan Plate Fleet aft fathom scallywag gibbet. To go on account boom topsail league brig bilge schooner. Shrouds bring a spring upon her cable overhaul doubloon crow's nest heave down crimp mizzenmast. Gabion jib Privateer lass jolly boat crack Jennys tea cup flogging wherry. Gally chandler log salmagundi scuppers take a caulk belay American Main. Gally prow landlubber or just lubber chase guns walk the plank starboard black spot pink.
        </p>
        <h1 className="is-size-3 has-text-weight-bold has-text-link-dark has-text-centered">Contact Details</h1>
        <br />

        <div className="columns">
          <div className="column is-one-third">
            <ContactDetails />
          </div>
          <div className="column">
            <ContactForm />
          </div>
        </div>
      </div>
      <GoogleMaps/>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />

    </div>
  )
}

export default Contact