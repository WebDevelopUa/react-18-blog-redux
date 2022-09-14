import SongsList from "../components/SongsList";
import SongDetail from "../components/SongDetail";

const ReduxSongs = () => {

    return (<div className="ui container grid">
            <div className="ui row">

                <div className="column eight wide">
                    <SongsList/>
                </div>

                <div className="column four wide">
                    <SongDetail/>
                </div>

            </div>
        </div>

    );
};

export default ReduxSongs;
