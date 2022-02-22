import { useState } from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import useAl from '../../hooks/useAl';
import { Link } from 'react-router-dom';

const Album = () => {
    const { allAlbum } = useAl({});
    const [filterdItem, setFilterdItem] = useState(allAlbum);

    console.log(allAlbum);

    const filterByQobuz = (tt) => {
        const filterDataQobuz = allAlbum.filter(al => al.source === `${tt}`);
        setFilterdItem(filterDataQobuz);
    }
    const allData = () => {
        setFilterdItem(allAlbum);
    }

    return (
        <div>
            
            <div style={{ backgroundColor: "#54595F" }}>
                <Container>
                    <br />
                    <Row className='mt-5 py-5'>
                        <Col className='col-md-4'>
                            <div>
                                <Link to="/home"><button className='btn btn-outline-dark mx-1' style={{ backgroundColor: "#d8b07e" }}>Home</button></Link>
                                <button className='btn btn-outline-dark mx-1' style={{ backgroundColor: "#d8b07e" }} onClick={() => allData()}>All</button>

                                <button className='btn btn-outline-dark mx-1' style={{ backgroundColor: "#d8b07e" }} onClick={() => filterByQobuz("LOCAL")}>Local</button>

                                <button className='btn btn-outline-dark mx-1' style={{ backgroundColor: "#d8b07e" }} onClick={() => filterByQobuz("QOBUZ")} >Qubuz</button>

                            </div>
                        </Col>

                        {/* album part  */}
                        <Col className='col-md-8'>
                            <Container>
                                <Row xs={1} md={3} lg={4} className="g-4">
                                    {filterdItem.map((al, idx) => (
                                        <Col className='mx-1 border rounded shadow' key={al.id}>
                                            <div className='p-1'>
                                                <Figure>
                                                    {
                                                        al.cover ? <Figure.Image

                                                            width="100%"
                                                            src={`./img/${al.cover}`}
                                                        /> : <Figure.Image style={{ backgroundColor: "black" }}

                                                            width="100%"
                                                            src="./img/undefined_album_cover.png"
                                                        />
                                                    }
                                                    {
                                                        al.source ? <div className='text-right' style={{margin:"-25px"}}>
                                                            <img  src='./img/qobuz.png' width="10%" alt="art" />
                                                        </div>: ""
                                                    }
                                                    <br />
                                                    <p style={{ color: " #d8b07e" }} className="fw-bold">{al.album}</p>
                                                    <Figure.Caption className='text-light fs-6'>
                                                        {al.artist}
                                                    </Figure.Caption>

                                                </Figure>
                                                <Link><button className='btn btn-outline-dark mx-1' style={{ backgroundColor: "#d8b07e" }}>Details</button></Link>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Album;