import { useEffect, useState } from "react";


const useAlbum = () => {
    const [allAlbum, setAllAlbum] = useState([]);

    useEffect(() => {
        fetch("./albums.json")
            .then(res => res.json())
            .then(data => setAllAlbum(data));
    }, []);

    return {
        allAlbum
    };
}

export default useAlbum;