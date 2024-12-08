import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PreLoader from '../components/pre-loader/PreLoader';
import Portfolio from './Portfolio';
import Home from '../components/home/Home';
import Introduction from '../components/introduction/Introduction';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<PreLoader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/TheVedantPortfolio.dev" element={<Portfolio />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
