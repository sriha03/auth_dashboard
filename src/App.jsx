import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './css/style.css';
import './charts/ChartjsConfig';
import Dashboard from './pages/Dashboard';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

function App() {
  // const location = useLocation();
  // useEffect(() => {
  //   document.querySelector('html').style.scrollBehavior = 'auto';
  //   window.scroll({ top: 0 });
  //   document.querySelector('html').style.scrollBehavior = '';
  // }, [location.pathname]);

  return (
    <>
      <header></header>
      <SignedIn>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          {/* Add more routes for authenticated users here */}
        </Routes>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default App;