import {BrowserRouter, Route, Switch} from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <div className="background">
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      <Route exact component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
