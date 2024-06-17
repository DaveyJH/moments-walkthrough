import styles from './assets/css/App.module.css';
import NavBar from './components/NavBar';
import Container from "react-bootstrap/Container";
import { Route, Switch } from 'react-router-dom';
import "./api/axiosDefaults";
import SignUpForm from './pages/auth/SIgnUpForm';

function App() {
  return (
    <div className={ styles.App }>
      <NavBar></NavBar>
      <Container className={ styles.Main }>
        <Switch>
          <Route exact path="/" render={ () => <h1>Home page</h1> }></Route>
          <Route exact path="/signin" render={ () => <h1>Sign in</h1> }></Route>
          <Route exact path="/signup" render={ () => <SignUpForm></SignUpForm> }></Route>
          <Route render={ () =>  <p>Page not found</p> }></Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;