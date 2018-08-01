import React from 'react'
import { Link } from 'react-router-dom'
import MyMapComponent from './MyMapComponent'
import Buses from './Buses'
import Stations from './Stations'


// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/buses'>Buses</Link></li>
        <li><Link to='/trains'>Trains</Link></li>
        <li><Link to='/stations'>Stations</Link></li>
        <li><Link to='/mymapcomponent'>Map</Link></li>
      </ul>

    </nav>
  </header>
)

export default Header
