const fs = require("fs");
const SpotifyWebApi = require("spotify-web-api-node");
const token =
  "BQCTj8-MfqG5k-eH395zPBph-t18kTK0pOQ-gS9KEwY4p7EXNlR0kIg76rb-AHU1m4O4f2EaWuYNmOXgQbRNqxz0vXAGxa6_8m2BcuHApljCiH9Do2rxL5EzlXkUq6UM3zZf4Jh_KuvDx6TGEfrm1LZMl2qvSR_4-nmUKjSS4_giarxeaXdrv5spHLT204sIIeuV2hLjiOLzccUniiUXo3K8qsSZbh1j-K8T6CLEXOdeYHVM2iTHGTmlrKQz_aFWNLzpV37qFJDdiGVEw4Vz1iolYYXlaeZhM2TcujMtXm8AVOoMij-v";

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

//GET MY PROFILE DATA
function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
    // console.log(me.body);
    getUserPlaylists(me.body.id);
  })().catch((e) => {
    console.error(e);
  });
}

//GET MY PLAYLISTS
async function getUserPlaylists(userName) {
  const data = await spotifyApi.getUserPlaylists(userName);

  console.log("---------------+++++++++++++++++++++++++");
  let playlists = [];

  for (let playlist of data.body.items) {
    console.log(playlist.name + " " + playlist.id);

    let tracks = await getPlaylistTracks(playlist.id, playlist.name);
    // console.log(tracks);

    // const tracksJSON = { tracks };
    // let data = JSON.stringify(tracksJSON);
    // fs.writeFileSync(playlist.name + ".json", data);
  }
}

//GET SONGS FROM PLAYLIST
async function getPlaylistTracks(playlistId, playlistName) {
  const data = await spotifyApi.getPlaylistTracks(playlistId, {
    offset: 1,
    limit: 100,
    fields: "items",
  });

  // console.log('The playlist contains these tracks', data.body);
  // console.log('The playlist contains these tracks: ', data.body.items[0].track);
  // console.log("'" + playlistName + "'" + ' contains these tracks:');
  let tracks = [];

  for (let track_obj of data.body.items) {
    const track = track_obj.track;
    tracks.push(track);
    console.log(track.name + " : " + track.artists[0].name);
  }

  console.log("---------------+++++++++++++++++++++++++");
  return tracks;
}

getMyData();
