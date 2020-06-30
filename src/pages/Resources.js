// src/pages/Resources.js
import React from 'react'
import CherryBeach from "../app/images/cherrybeach.jpg";

const Resources = () => {
  return (
    <div className="container">
	  <h1 class="title has-text-link-dark">Resources</h1>
	  <img src={CherryBeach} className="img_responsive" alt="Cherry Beach" title="Cherry Beach" />
	  <p>Tack boatswain pink topsail run a shot across the bow topgallant gibbet. Topgallant avast hogshead jib grog sloop cutlass.  </p>
	  <p>Keelhaul clap of thunder Privateer black jack jack black spot weigh anchor. Lookout boatswain Corsair coffer square-rigged ye bilged on her anchor. </p>
	  <p>Quarterdeck clipper parley yardarm gally barque galleon. Bring a spring upon her cable gunwalls Shiver me timbers pink scurvy fore barque. </p>
	</div>
  )
}

export default Resources