import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import ReactPlayer from 'react-player'
import { Container } from 'reactstrap';
import meet from '../../meet.png'

function Meet(){
  return(
      <div>
        <Container>
                <Row>
                    <Col sm="12" md={{ size: 9, offset: 3 }}><img src={meet} alt={"meet"}/>  </Col>
                </Row>
        </Container>

        <div class="espacoTop"></div>
       
        <div className="container d-flex justify-content-center">
          <h1>Como criar ou participar de uma aula?</h1>
        </div>

        <div className="container d-flex justify-content-center">
          <ReactPlayer url="https://www.youtube.com/watch?v=Tc_YpQKMTtw"/>
        </div>

        <div class="espacoBottom"></div>

        <div className="container d-flex justify-content-center">
          <h1 class="filho">Como habilitar o microfone ou câmera?</h1>
        </div>

        <div className="container d-flex justify-content-center">
          <ReactPlayer url="https://www.youtube.com/watch?v=kWOwQCE7xSo"/>
        </div>

        <div class="espacoBottom"></div>

        <div className="container d-flex justify-content-center">
          <h1>Como compartilhar a tela?</h1>
        </div>

        <div className="container d-flex justify-content-center">
          <ReactPlayer url="https://www.youtube.com/watch?v=Fcwe_XPgiRo"/>
        </div>

        <div class="espacoBottom"></div>

        <div className="container d-flex justify-content-center">
          <h1>Como gravar a aula e postar no Google Classroom?</h1>
        </div>

        <div className="container d-flex justify-content-center">
          <ReactPlayer url="https://www.youtube.com/watch?v=AR1GiY84C0k"/>
        </div>

        <div class="espacoBottom"></div>

        <div class="footer"> 
                <Row>
                    <Col sm="12">
                        <Card body>
                            <Button color="secondary" href="https://meet.google.com/">Site do Google Meet</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
      </div>
  );
};

export default Meet;

