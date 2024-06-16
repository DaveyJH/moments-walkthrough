import styles from './assets/css/App.module.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className={ styles.App }>
      <NavBar></NavBar>
    </div>
  );
}

export default App;