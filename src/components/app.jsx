import React from 'react';
import {CssBaseline} from '@mui/material';
import {Route, Routes} from 'react-router-dom';
const App = () => {
  return (
    <div>
   
      <CssBaseline/>
      <main>
      <Routes>
        <Route exact path="/" element = {<h1>Home</h1>}>
          
        </Route>
        <Route exact path="/movies" element={<h1>Movies</h1>}>
          
        </Route>
        </Routes>
      </main>
    </div>
  )
};

export default App;