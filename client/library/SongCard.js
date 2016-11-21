import React, { PropTypes } from 'react'

const propTypes = {
  name: PropTypes.string,
  setCurrent: PropTypes.function
}

const SongCard = (props) => (
  <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.name}</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
      <div className="card-action">
        <button id={props.name} onClick={props.setCurrent}> Play Me </button>
      </div>
    </div>
  </div>
)

SongCard.propTypes = propTypes

export default SongCard
