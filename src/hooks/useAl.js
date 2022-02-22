import { useContext } from "react"
import { AlbumContext } from "../components/Context/AlbumProvider/AlbumProvider";

const useAl = ()=>{
    return useContext(AlbumContext)
}

export default useAl;