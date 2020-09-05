import React from 'react';
import axios from 'axios';

const Song = props => (
        <tr>
            <td>{props.song.name}</td>
            <td>{props.song.artist}</td>
            <td>
                { 
                    (props.song.preview_url == "None") 
                    ? <p>No preview exists</p>
                    : <audio controls>
                        <source src={props.song.preview_url}/>
                    </audio>
                }

            </td>


        </tr>
)

export default class ViewPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: {},
            songs: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/playlists/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    playlist: res.data,
                    songs: res.data.songs,
                });
            })
            .catch(err => console.log(err))
    }

    songList() {
        return this.state.songs.map(currentSong => {
            return <Song song={currentSong} key={currentSong._id}/>
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.playlist.playlistName}</h1>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Song</th>
                        <th scope="col">Artist</th>
                        <th scope="col">Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.songList() }
                    </tbody>
                </table>
            </div>
        )
    }
}