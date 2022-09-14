// Action creator
import {SONG_SELECTED} from "../data/constants";

export const selectSong = (song) => {
    // Action
    return {
        type: SONG_SELECTED,
        payload: song
    }
}
