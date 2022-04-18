import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return <BrowserRouter>
    <Switch>
      <Route path="/:id" component={Home}/>
      <Redirect to='/666' />
    </Switch>
  </BrowserRouter>;
}

export default App;
