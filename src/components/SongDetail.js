import {connect} from "react-redux";

const SongDetail = ({song}) => {
    console.log(song);

    if (!song) {
        return <div>Select a song</div>
    }

    return (
        <div>
            <h1> Song Detail </h1>
            <p>{song.title}</p>
            <p>{song.duration}</p>
        </div>
    )
}

const mapStateToProps = state => ({song: state.selectedSong})

export default connect(mapStateToProps)(SongDetail)
