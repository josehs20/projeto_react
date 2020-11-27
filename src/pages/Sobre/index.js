import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, Button, CardTitle, CardText} from 'reactstrap';
import redentor from '../../redentor.png'

function Sobre(){
  return(
    <div>
      <Container>
          <Row>
            <Col sm="12" md={{ size: 9, offset: 4 }}><img src={redentor} alt={"redentor"}/>  </Col>
          </Row>
      </Container>
 
      <Container>
        <Row>
            <Col sm="12" md={{ size: 12, offset: 2 }}><h1>Extensão Integrada em Humanas VI</h1></Col>
        </Row>

        <Row>
            <Col sm="12" md={{ size: 12, offset: 1 }}><h3>Alunos do 6 período de Sistemas de Informação da UniRedentor</h3>
            </Col>
        </Row>
      </Container>
      
      <div class="footerSobre">
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle tag="h5">UniRedentor</CardTitle>
              <CardText>Centro Universitário Redentor - Formando Amigos e Profissionais</CardText>
              <Button color="secondary" href="https://www.redentor.edu.br/">UniRedentor</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle tag="h5">GitHub</CardTitle>
              <CardText>Código Fonte</CardText>
              <Button color="secondary" href="https://github.com/Viniciusitp">GitHub</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
    );
}
export default Sobre;
