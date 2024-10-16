import { Route, Routes } from 'react-router-dom';
import './App.css';
import pages from './pages/pages';
import { Suspense } from 'react';
import Navbar from './Layout/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {pages.map((page)=>(
          <Route path={page.route} key={page.route} 
          element={<Suspense fallback={<div>Loading...</div>}>{page.element}</Suspense>}
        />))}
      </Routes>
    </div>
  );
}

export default App;
