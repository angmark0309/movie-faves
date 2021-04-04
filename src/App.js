import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from  "./pages/Home";
import LikedMovies from './pages/LikedMovies';
import { MoviesProvider } from './customHooks';

export default function App() {
  return (
    <MoviesProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/liked">Liked Movies</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/liked">
              <LikedMovies />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </MoviesProvider>
  );
}
