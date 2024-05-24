import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'
import './App.css'

const App = () => (
  <div className="ipl-bg">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/ipl/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
