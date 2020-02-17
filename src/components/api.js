
async function Api() {
    const key = 'api_key=3da43bffda7c3eae41a4dfb12e1bbfc6';
    const originalApiQuery = 'http://ws.audioscrobbler.com/2.0/?';
    const topTracks = 'method=chart.gettoptracks&';
    const format = 'format=json';


    const fetchResult = await fetch(`${originalApiQuery}${topTracks}${key}&${format}`);
    const json = await fetchResult.json();
    const trackArray = json.tracks.track;
    let fetchPromiseArr = [];
    for (const track of trackArray) {
        fetchPromiseArr.push(getPromise(track, originalApiQuery, key, format));
    }
    const jsonPromiseArr = await Promise.all(fetchPromiseArr).then((result) => {
        const jsonArr = [];
        for (const res of result) {
            jsonArr.push(res.json());
        }
        return jsonArr;
    });
    const resultArr = await Promise.all(jsonPromiseArr).then((result) => {
         return result.map(info => ({
            track_name: info.track.name,
            artist: info.track.artist.name,
            album: info.track.album ? info.track.album.title : "Now 34",
            tag: info.track.toptags.tag[0] ? info.track.toptags.tag[0].name : "pop",
            year: info.track.wiki ? new Date(info.track.wiki.published).getFullYear() : "2018",
        }));
    });
    return resultArr;
}

function getPromise(track, originalApiQuery, key, format) {
    const name = track.name;
    const artist = track.artist.name;
    const url = `${originalApiQuery}method=track.getInfo&${key}&artist=${artist}&track=${name}&${format}`;
    return fetch(url);
}

export default Api;