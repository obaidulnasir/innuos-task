import { useEffect, useState } from "react";


const useAlbum = () => {
    const [allAlbum, setAllAlbum] = useState([]);
    const [localAlbum, setLocalAlbum] = useState([]);
    const [qobuz, setQobuz] = useState([]);

    useEffect(() => {
        fetch("./albums.json")
            .then(res => res.json())
            .then(data => setAllAlbum(data));
        // console.log(allAlbum);
    }, []);

    // Filter by LOCAL 
    // const filterDataLocal = allAlbum.filter(al => al.source === "LOCAL");
    // // console.log(filterData);
    // setLocalAlbum(filterDataLocal);


    const filterByQobuz = ()=>{
        const filterDataQobuz = allAlbum.filter(al => al.source === "QOBUZ");
        // setQobuz(filterDataQobuz);
        console.log(filterDataQobuz)    
    }


    // filterLocal();
    // filterByQobuz();

    // const filter = (keyword)=>{
    //     const filterData = allAlbum.filter(al => al.source === `${keyword?.uppercase}`);
    //     // return filterData;
    //     console.log(filterData)
    // };

    return {
        allAlbum,
        localAlbum,
        filterByQobuz,
        qobuz
    };
}

export default useAlbum;