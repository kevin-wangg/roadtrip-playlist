const router = require('express').Router();
let Playlist = require('../models/playlist.model');
let Artist = require('../models/artist.model');

router.route('/').get((req, res) => {
    Playlist.find()
        .then(playlists => res.json(playlists))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const coordinates = req.body.coordinates;
    const playlistName = req.body.playlistName;
    const startCity = req.body.start;
    const destination = req.body.destination;
    let songs = []
    let artists = []

    function makePlaylist() {
        let promises = []
        for(let coordinate of coordinates) {
            let latitude = coordinate.lat
            let longitude = coordinate.lng;
            let distance = 1;
            promises.push(Artist.find({ $and: [ { lat: {$lte : latitude + distance } }, { lat: { $gte : latitude - distance } },
                { lng : { $lte : longitude + distance } }, { lng :{ $gte : longitude - distance } } ] } )
                .then(artists_data => {
                    // artists is array of artist objects
                    // take songs from each artist and create a playlist from them
                    for(let artist_object of artists_data) {
                        if(artists.includes(artist_object)) {
                            continue;
                        }
                        artists.push(artist_object);
                        songs = songs.concat(artist_object.songs);
                    }    
                })
                .catch(err => res.status(400).json('Error: ' + err)));
        }
        return Promise.all(promises);
    }
    makePlaylist().then(() => {
        const newPlaylist = new Playlist({playlistName, startCity, destination, songs, artists});
        newPlaylist.save()
            .then(() => res.json('Playlist: ' + playlistName + ' added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })

})

router.route('/:id').get((req, res) => {
    Playlist.findById(req.params.id)
        .then(playlist => res.json(playlist))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router