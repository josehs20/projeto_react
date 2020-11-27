import React from 'react';
import { Table } from 'reactstrap';
import './index.css';

const Footer = (props) => {
  return (
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
  );
}

export default Footer;