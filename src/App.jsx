import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PreLoader from '../components/pre-loader/PreLoader';
import Home from '../components/home/Home';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<PreLoader />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
