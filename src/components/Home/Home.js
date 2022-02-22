import React from 'react';
import { Link } from 'react-router-dom';
import style from "./home.module.css"

const Home = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center' style={{backgroundColor:"#54595F", height:"100vh"}}>
                <div>
                    <Link to="/album">
                        <button className={style.getButton}>GET ALBUMS</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;