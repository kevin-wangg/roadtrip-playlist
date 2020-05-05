import React from 'react';
import getRoute from '../logic/get-route';
import getCoordinates from '../logic/get-coordinates';

export default class CreatePlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: '',
            destination: ''
        }
        this.onChangeDestination = this.onChangeDestination.bind(this);
        this.onChangeStart = this.onChangeStart.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeStart(event) {
        this.setState({
            start: event.target.value
        })
    }

    onChangeDestination(event) {
        this.setState({
            destination: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        getRoute(this.state.start, this.state.destination)
            .then(res => {
                let coordinates = getCoordinates(res.data.routes[0].legs[0].steps);
                console.log(coordinates);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Starting City:</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.start}
                        onChange={this.onChangeStart}
                    />
                </div>
                <br />
                <div>
                    <label>Destination</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.destination}
                        onChange={this.onChangeDestination}
                    />
                </div>
                <br />
                <div className="form-group">
                    <input type="submit" value="Make Playlist" className="btn btn-primary"/>
                </div>
            </form>
        )
    }
}