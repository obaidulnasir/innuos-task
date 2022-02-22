import { createContext } from "react";
import useAlbum from "../../../hooks/useAlbum";

export const AlbumContext= createContext();

const AlbumProvider = ({children})=>{
    const allContext = useAlbum();

    return(
        <AlbumContext.Provider value={allContext}>
            {children}
        </AlbumContext.Provider>
    )
}

export default AlbumProvider;