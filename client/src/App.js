import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import CreatePlaylist from './components/create-playlist';
import PlaylistList from './components/playlist-list';
import ViewPlaylist from './components/view-playlist';
import { BrowserRouter as Router, Route }from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <br />
        <Route path='/' exact component={PlaylistList} />
        <Route path='/create'  component={CreatePlaylist} />
        <Route path='/view/:id' component={ViewPlaylist} />
      </Router>
    </div>
  );
}

export default App;
