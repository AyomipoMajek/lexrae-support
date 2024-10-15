import { Route, Routes } from 'react-router-dom';
import './App.css';
import pages from './pages/pages';
import { Suspense } from 'react';

function App() {
  return (
    <div className="App">
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
