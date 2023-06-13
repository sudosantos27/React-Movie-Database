import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
    <Router>
      <Header />
      {/* The Routes component is used to define the routing configuration */}
      <Routes>
        {/* The Route component is used to define individual routes */}
        <Route path='/' element={<Home />} /> {/* Renders the Home component when the path is '/' */}
        <Route path='/:movieId' element={<Movie />} /> {/* Renders the Movie component with the movieId parameter */}
        <Route path='/*' element={<NotFound />} /> {/* Renders the NotFound component for all other routes */}
      </Routes>
      <GlobalStyle /> {/* Applies global styles */}
    </Router>
);

export default App;
