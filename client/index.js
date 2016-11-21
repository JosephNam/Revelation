import React from 'react'
import ReactDOM from 'react-dom'

import PlayerContainer from './audioplayer/PlayerContainer'

const Root = () => (
  <div className="container">
    <PlayerContainer />
  </div>
)
ReactDOM.render(<Root />, document.getElementById('content'))
