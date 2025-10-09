import bold from "./animation";

export const songs = ["Pipe down", "Jumpman", "Nothing on you"];

export default function printSongs(): void {
    songs.forEach((song) => {
        bold(song);
    });
}