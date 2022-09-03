import {useEffect, useState} from "react";
import axios from "axios";

const RemoteImage = ({url, alt}) => {
    const [renderImage, setRenderImage] = useState(false);

    useEffect(
        () => {
            axios.get(url)
                .then(
                    r => {
                        setRenderImage(true);
                        console.log(`1 check image url: ${r}`);
                    }
                )
                .catch(
                    r => {
                        setRenderImage(false);
                        console.log(`2 check image url: ${r}`);
                    }
                )
        }, [url]
    );


    return (renderImage ? <img src={url} alt={alt}/> : <span/>)
}

export default RemoteImage
