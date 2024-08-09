// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Family Affair", artist: "Mary J. Blige", genre: "R&B"},
    { title: "Hypnotize", artist: "The Notorious B.I.G", genre: "Hip-Hop" },
    { title: "Assez", artist: "Demaya", genre: "Techno" },
    { title: "No Scrubs", artist: "TLC", genre: "R&B" },
    { title: "Sprinter", artist: "Dave & Central Cee", genre: "Hip-Hop" },
    { title: "Tataki", artist: "Argy", genre: "Techno" },
    { title: "Scala", artist: "Agoria", genre: "Techno" },
    { title: "redrum", artist: "21 Savage", genre: "Hip-Hop" },
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Hip-Hop",
    "Rocket": "Techno",
    "Groot": "R&B"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    const playlistsDiv = document.getElementById('playlists');

    // Clearing existing content 
    playlistsDiv.innerHTML = '';

    // Creating a playlist for each guardian using map ()
    Object.keys(guardians).map(guardian => {
        const genre = guardians[guardian];

        //Filter the songs based on the Guardians preffered genre
        const filteredSongs = songs.filter(song => song.genre === genre);


        // Creat container for playlist
        const playlistContainer = document.createElement('div');
        playlistContainer.className = 'playlist';

        // Add the guardians name as header
        const heading = document.createElement('h2');
        heading.textContent = `${guardian}'s Playlist`;
        playlistContainer.appendChild(heading);

        // Add songs to playlist
        filteredSongs.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.className = 'song';

            const songTitle = document.createElement('span');
            songTitle.className = 'song-title';
            songTitle.textContent = song.title;

            const songArtist = document.createElement('span');
            songArtist.textContent = ` by ${song.artist}`;

            songDiv.appendChild(songTitle);
            songDiv.appendChild(songArtist);

            playlistContainer.appendChild(songDiv);
        });

        //Adding the playlist to the playlist div
        playlistsDiv.appendChild(playlistContainer);
    });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


