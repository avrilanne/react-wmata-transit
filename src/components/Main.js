import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Trains from './Trains'
import Buses from './Buses'
import MyMapComponent from './MyMapComponent'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route path='/trains' component={Trains}/>
      <Route path='/buses' component={Buses}/>
      <Route path='/mymapcomponent' component={MyMapComponent}/>
    </Switch>
  </main>
)

export default Main
