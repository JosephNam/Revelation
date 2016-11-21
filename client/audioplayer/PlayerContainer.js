import React, { PropTypes } from 'react'

import Player from './Player'
// import Library from '../library/SongCard'

const propTypes = {
  currentSong: PropTypes.string
}

export default class PlayerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Player name={this.props.currentSong} />
      </div>
    )
  }
}

PlayerContainer.propTypes = propTypes

PlayerContainer.defaultProps = {
  currentSong: 'ISurrender'
}
