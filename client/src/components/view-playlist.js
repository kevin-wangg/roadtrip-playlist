import React from 'react';

export default class ViewPlaylist extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <h1>This is playlist id: {this.props.match.params.id}</h1>
        )
    }
}