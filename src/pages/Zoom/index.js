import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, Button } from 'reactstrap';
import zoom from '../../zoom.png'
import ReactPlayer from 'react-player'


function Zoom(){
    return(
        <div>
                       <Container>
                <Row>
                    <Col sm="12" md={{ size: 9, offset: 4 }}><img src={zoom} alt={"zoom"}/>  </Col>
                </Row>
            </Container>

            <div class="espacoTop"></div>

            <div className="container d-flex justify-content-center">
                <h1>Como se cadastrar no Zoom?</h1>
            </div>

            <div className="container d-flex justify-content-center" >
                <ReactPlayer url="youtube.com/watch?v=KDpeYddOn8o"/>
            </div>

            <div class="espacoBottom"></div>

            <div className="container d-flex justify-content-center">  
                <h1>Como participar de uma reunião pelo computador?</h1>
            </div>

            <div className="container d-flex justify-content-center">
                <ReactPlayer url="https://www.youtube.com/watch?v=kAiUSluGkdo"/>
            </div>

            <div class="espacoBottom"></div>

            <div className="container d-flex justify-content-center">  
                <h1>Como se cadastrar no Zoom pelo Celular?</h1>
            </div>

            <div className="container d-flex justify-content-center">
                <ReactPlayer url="https://www.youtube.com/watch?v=l5fyjSjmLSo"/>
            </div>

            <div class="espacoBottom"></div>

            <div class="footer">
                <Row>
                    <Col sm="12">
                        <Card body>
                            <Button color="secondary" href="https://zoom.us/pt-pt/meetings.html">Site do Zoom</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>

    );
}
export default Zoom;
