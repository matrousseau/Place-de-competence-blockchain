import React from 'react';
import {
  Card, CardBody, Col, Badge, Table,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const ResponsiveTable = ({
  expertProps,
}) => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <Table responsive className="table--bordered">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Entité</th>
              <th>Email</th>
              <th>Compétences</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th> Nom </th>
              <td> Prénom </td>
              <td> Entité </td>
              <td> Email </td>
              <td>{ expertProps }</td>
              <td><Badge color="success">Status </Badge></td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </Col>
);

ResponsiveTable.propTypes = {
  expertProps: PropTypes.func.isRequired,
};

export default withTranslation('common')(ResponsiveTable);
