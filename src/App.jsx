import Loader from './Loader'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
