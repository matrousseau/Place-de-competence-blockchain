import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, Col, Progress, Button,
} from 'reactstrap';
import Statistics from './Statistics';

const Summary = ({ title }) => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody>
        <div className="project-summary">
          <div className="card__title">
            <h5 className="bold-text">Maison des Safer - GIE SIIIS </h5>
          </div>
          <Button className="project-summary__btn" outline size="sm"><a href="/todo">Plus de détails...</a></Button>
          <table className="project-summary__info">
            <tbody>
              <tr>
                <th>Entité aidée:</th>
                <td>{ title }</td>
              </tr>
              <tr>
                <th>Date de rendu:</th>
                <td>21/07/2019</td>
              </tr>
              <tr>
                <th>Brief de entité:</th>
                <td><a href="/">Brief.xls</a></td>
              </tr>
            </tbody>
          </table>
          <p>Architecte Big Data
          Etude solution synchronisation SYBASE / POSTGRESQL (Apache Nifi, Talend, Pentaho Data Integration)
          Mise en place d un POC / démonstrateur
          </p>
          <div className="project-summary__stats">
            <div className="project-summary__stat">
              <p>6 <span>Tâches</span></p>
            </div>
            <div className="project-summary__stat">
              <p>4 <span>Participants</span></p>
            </div>
            <div className="project-summary__progress progress-wrap progress-wrap--middle">
              <Progress value={74}>74% de la mission terminée</Progress>
            </div>
          </div>
          <hr />
          <Statistics />
        </div>
      </CardBody>
    </Card>
  </Col>
);

Summary.propTypes = {
  title: PropTypes.string,
};

Summary.defaultProps = {
  title: 'null',
};

export default Summary;
