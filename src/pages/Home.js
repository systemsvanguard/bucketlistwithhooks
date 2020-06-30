import React, {useState} from 'react';
import CallToAction  from "../components/CallToAction";
import AvengersList  from "../avengers/AvengersList";
import AvengersTable from "../avengers/AvengersTable";
import AvengersEdit  from "../avengers/AvengersEdit";
import AvengersAdd   from "../avengers/AvengersAdd";
import Spacer from "../app/images/spacer.png";


const Home = () => {
  //list the avengers
  const [avengers, setAvengers] = useState(AvengersList);

  // add a new avenger
  const addAvenger = avenger => {
    avenger.id = avengers.length + 1;
    setAvengers([...avengers, avenger]);
  }

  // remove an avenger
  const removeAvenger = id => {
     setAvengers(avengers.filter(avenger => avenger.id !== id));
  }

  // modify an avenger
  const [editing, setEditing] = useState(false);
  const initialAvenger = {id: null, name: '', username: ''};
  const [currentAvenger, setCurrentAvenger] = useState(initialAvenger);

  const editAvenger = (id, avenger) => {
    setEditing(true);
    setCurrentAvenger(avenger);
  }

  const updateAvenger = (newAvenger) => {
    setAvengers(avengers.map(avenger => (avenger.id === currentAvenger.id ? newAvenger : avenger)))
    setCurrentAvenger(initialAvenger)
    setEditing(false)
  }
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title is-size-1 has-text-link-dark">The Marvelous Avengers</h1>
          <h2 className="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
          </h2>
          <p>Black jack stern hogshead American Main fire in the hole pillage scurvy. </p>
          <p>Heave to capstan Plate Fleet aft fathom scallywag gibbet. To go on account boom topsail league brig bilge schooner. </p>
          <br />

          <h1 className="title has-text-danger has-text-weight-bold">Avengers Roll Call</h1>
          <AvengersTable  avengers={avengers} removeAvenger={removeAvenger} editAvenger={editAvenger} />

          <div className="columns">
            <div className="column">
              { editing ? (
                <div>
                  <h3 className="title has-text-success has-text-weight-bold">
                    <span className="icon is-small"><i className="fas fa-user-cog"></i></span>
                    <img src={Spacer} alt="" /> <img src={Spacer} alt="" />
                    Edit/Update Avenger
                  </h3>
                  <AvengersEdit
                    currentAvenger={currentAvenger}
                    setEditing={setEditing}
                    updateAvenger={updateAvenger}
                  />
                </div>
              ) : (
                <div>
                  <h3 className="title has-text-link has-text-weight-bold">
                    <span className="icon is-small"><i className="fas fa-user-plus"></i></span>
                    <img src={Spacer} alt="" /> <img src={Spacer} alt="" />
                    Add New Avenger
                  </h3>
                  <AvengersAdd addAvenger={addAvenger} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <div className="container">
      <p>American Main fire in the hole pillage scurvy. </p>
      </div>
    </>
  )
}

export default Home