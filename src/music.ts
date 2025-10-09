import bold from "./animation";

export const songs = ["Pipe down", "Jumpman", "Nothing on you"];

function printSongs(): void {
    songs.forEach((song) => {
        bold(song);
    });
}

export default {printSongs, songs};