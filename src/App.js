import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Main from './components/Main'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
