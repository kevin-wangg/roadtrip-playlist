import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <h1 className="navbar-brand">Roadtrip Playlist</h1>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Playlists</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create Playlist</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}