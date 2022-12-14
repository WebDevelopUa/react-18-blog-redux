import {Component} from "react";
import {connect} from "react-redux";
import {selectSong} from "../actions";

class SongsList extends Component {
    renderList() {
        return this.props.songs.map(song => (
            <div className="item" key={song.title}>
                <div className="right floated content">
                    <button onClick={()=> this.props.selectSong(song)}
                        className="ui button primary">Select</button>
                </div>
                <div className="content">{song.title}</div>
            </div>))
    }

    render() {
        return (
            <div className="ui divided list">
                <h1> Song List</h1>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    songs: state.songs
});

export default connect(mapStateToProps, {selectSong})(SongsList);
