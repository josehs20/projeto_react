import React from 'react';
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import redentor from '../../redentor.png'
import canva_logo from '../../canva_logo.png'
import edmodo from '../../edmodo.png'
import evernote from '../../evernote.png'
import google_docs from '../../google_docs.jpg'
import Googledrive from '../../Googledrive.png'
import classroom from '../../classroom.jpg'
import { Card, Button, CardTitle, CardText } from 'reactstrap'; 

function Main(){
    return(
        <div>
            <Container className="container d-flex justify-content-center">
                <Row>
                    <Col sm="12" md={{ size: 9, offset: 4 }}><img src={redentor} alt={"redentor"}/>  </Col>
                    <Col sm="12" md={{ size: 9, offset: 3 }}><h1>Ferramentas Para Aulas Remotas</h1></Col>
                </Row>
            </Container>
            <Row>
                <Col sm="4">
                  <Card body>
                      <img class="classroom" src={classroom} alt={"classroom"}/> 
                      <CardTitle tag="h5">Google Classroom</CardTitle>
                      <CardText>É a sala de aula online do Google, em que alunos e professores podem realizar encontros virtuais para a realização de aulas à distância. Durante a quarentena devido ao coronavírus, muitas instituições de ensino públicas e privadas fecharam e foram obrigadas a dar continuidade às classes de forma online, recorrendo à plataforma.</CardText>
                      <div class="alinhamentoClassRoom"></div>
                      <Button href="https://classroom.google.com/">Acessar</Button>
                  </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <img class="canva_logo" src={canva_logo} alt={"canva_logo"}/> 
                        <CardTitle tag="h5">Canva</CardTitle>
                        <CardText>O Canva é uma plataforma de design que permite criar diversos elementos visuais, incluindo apresentações.</CardText>
                        <div class="alinhamentoCanva"></div>
                        <Button href="https://www.canva.com/pt_br/">Acessar</Button>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <img class="evernote" src={evernote} alt={"evernote"}/> 
                        <CardTitle tag="h5">Evernote</CardTitle>
                        <CardText>É um aplicativo que pode ser utilizado pelo professor para gerenciar e organizar os temas de cada aula. A partir do próprio celular, ele pode criar notas, salvar pesquisas, gravar áudios e organizar os materiais de aula. Além disso, ao adicionar qualquer recurso a sua conta, a agenda é automaticamente sincronizada e disponibilizada em todos os computadores, telefones e tablets que o professor usar.</CardText>
                        <Button href="https://evernote.com/intl/pt-br">Acessar</Button>
                    </Card>
                </Col>
            </Row>

            <div class="alinhamento"></div>

            <Row>
                <Col sm="4">
                    <Card body>
                        <img class="google_docs" src={google_docs} alt={"google_docs"}/> 
                        <CardTitle tag="h5">Google Docs</CardTitle>
                        <CardText>O Google docs é o editor de documentos do Google que funciona como o Word ou Libreoffice, mas com o diferencial de ser online e completamente gratuito.  É uma ferramenta simples e prática, com funcionalidades que facilitam muito a sua vida na hora de planejar a aula.</CardText>
                        <div class="alinhamentoGoogleDocs"></div>
                        <Button href="https://www.google.com/intl/pt-BR/docs/about/">Acessar</Button>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <img class="googledrive" src={Googledrive} alt={"Googledrive"}/> 
                        <CardTitle tag="h5">Google Drive</CardTitle>
                        <CardText>Permite que estudantes e professores criem documentos, apresentações, planilhas e afins e depois compartilhem esses conteúdos com outras pessoas. Além disso, seus trabalhos serão automaticamente salvos conforme você os cria.</CardText>
                        <div class="alinhamentoGoogleDrive"></div>
                        <Button href="https://www.google.com.br/drive/">Acessar</Button>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <img class="edmodo" src={edmodo} alt={"edmodo"}/> 
                        <CardTitle tag="h5">Edmodo</CardTitle>
                        <CardText>O Edmodo pode ser definido como um “Facebook para pais, alunos e professores”. A ideia aqui é criar uma rede social na qual somente pessoas convidadas tenham acesso. As postagens aparecem apenas para grupos específicos, o que torna mais fácil para que professores postem conteúdos que serão visualizados apenas por pais e alunos.</CardText>
                        <Button href="https://new.edmodo.com/">Acessar</Button>
                    </Card>
                </Col>
            </Row> 

            <div class="footer">
                <Table dark>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Professor</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Fábio Machado</td>
                            <td>fabiomac@gmail.com</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
export default Main;
