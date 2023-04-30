import { Route , Switch , Redirect } from 'react-router-dom';
import SignUp from './components/signUp';
import Login from './components/login';
function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route path="/Login" component={Login}/>
        <Route path="/" component={SignUp}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
