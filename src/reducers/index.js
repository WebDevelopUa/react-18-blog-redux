// Reducers
import {combineReducers} from "redux";
import {SONG_SELECTED} from "../data/constants";

const songReducer = () => {
    return [
        {title: 'Song Title #1', duration: '3:11'},
        {title: 'Song Title #2', duration: '4:55'},
        {title: 'Song Title #3', duration: '0:13'},
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === SONG_SELECTED) {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})
