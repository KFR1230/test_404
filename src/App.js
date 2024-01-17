import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';

const Home = lazy(() => import('./components/HomePage'));
const About = lazy(() => import('./components/AboutPAge'));

function App() {
  const basename = process.env.REACT_APP_PUBLIC_URL;
  return (
    <Router basename={basename}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: '100svh', width: '100%' }}>
          <Navbar />
          <Suspense fullback={<h1>Loading....</h1>}>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
