import React from 'react';
import axios from 'axios';

const Playlist = props => (
    <div className="col-md-3" style={{marginRight: "5%"}}>
        <div className="card">
            <img className="card-img-top" src={props.playlist.artists[0].image_url} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.playlist.playlistName}</h5>
                <p className="card-text">{props.playlist.startCity} to {props.playlist.destination}</p>
                <a href={"/view/"+props.playlist._id} className="btn btn-primary">See more</a>
            </div>
        </div>
    </div>
)

export default class PlaylistList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: []
        };

    }

    componentDidMount() {
        axios.get('http://localhost:5000/playlists')
            .then(res => {
                this.setState({
                    playlists: res.data,
                });
            })
            .catch(err => console.log(err));
    }

    playlistList() {
        return this.state.playlists.map(currentPlaylist => {
            return <Playlist playlist={currentPlaylist} key={currentPlaylist._id}/>
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    { this.playlistList() }
                </div>
            </div>
        )
    }
}