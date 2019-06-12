import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Summary from './components/Summary';

const ProjectSummary = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Développez vos compétences</h3>
        <h3 className="page-subhead subhead">Montez en compétences en proposant votre aide aux différentes entités.
        </h3>
      </Col>
    </Row>
    <Row>
      <Summary />
      <Summary />
      <Summary />
    </Row>
  </Container>
);

export default ProjectSummary;
