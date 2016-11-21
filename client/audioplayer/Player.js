import React, { PropTypes } from 'react'

const propTypes = {
  name: PropTypes.string
}

const Player = (props) => (
  <audio
    controls
    autoPlay
  >
    <source src={`https://s3.amazonaws.com/revelation/${props.name}.mp3`} type="audio/mpeg" />
  </audio>
)

Player.propTypes = propTypes

export default Player
