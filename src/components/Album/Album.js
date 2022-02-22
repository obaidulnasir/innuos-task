import { useState } from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import useAl from '../../hooks/useAl';

const Album = () => {
    const { allAlbum, qobuz } = useAl({});
    const [filterdItem, setFilterdItem] = useState(allAlbum);
    const [filter, setFilter] = useState([]);
    console.log(typeof (allAlbum));

    const filterByQobuz = (tt) => {
        const filterDataQobuz = allAlbum.filter(al => al.source === `${tt}`);
        setFilter(filterDataQobuz);
        setFilterdItem(filterDataQobuz);
    }
    const allData = ()=>{
        setFilterdItem(allAlbum);
    }

    return (
        <div>
            <div style={{ backgroundColor: "#54595F", height: "100vh" }}>
                <Container>
                    <br />
                    <Row>
                        <Col className='col-md-4'>

                        </Col>
                        <Col className='col-md-8'>
                            <Container>
                                <Row xs={1} md={3} className="g-4">
                                    {filterdItem.map((al, idx) => (
                                        <Col key={al.id}>
                                            <Figure>
                                                <Figure.Image  
                                                    alt="171x180"
                                                    src={`./img/${al.cover}`}
                                                />
                                                <Figure.Caption>
                                                    {al.source}
                                                </Figure.Caption>
                                            </Figure>
                                        </Col>
                                    ))}
                                </Row>
                                <button onClick={() => filterByQobuz("LOCAL")}>click</button>
                                <button onClick={() => filterByQobuz("QOBUZ")}>Qobuz</button>
                                <button onClick={() => allData()}>all</button>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Album;