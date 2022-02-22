import { useEffect, useState } from "react";


const useAlbum = () => {
    const [allAlbum, setAllAlbum] = useState([]);

    useEffect(() => {
        fetch("./albums.json")
            .then(res => res.json())
            .then(data => setAllAlbum(data));
            console.log(allAlbum)
    }, []);

    return {
        allAlbum
    };
}

export default useAlbum;