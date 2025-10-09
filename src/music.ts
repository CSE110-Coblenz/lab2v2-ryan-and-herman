import bold from "./animation";

const songs = ["Pipe down", "Jumpman", "Nothing on you"];

function printSongs(): void {
    songs.forEach((song) => {
        bold(song);
    });
}

export default printSongs;