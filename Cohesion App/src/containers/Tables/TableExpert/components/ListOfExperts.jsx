import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Card, CardBody, Col,
} from 'reactstrap';
import ResponsiveTable from './ResponsiveTable';
import TitleTable from './TitleTable';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class ListOfExperts extends PureComponent {
  constructor() {
    super();
    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  renderTitle() {
    const { hits } = this.state;
    return hits.map(
      hit => <div key={hit.objectID}> <ResponsiveTable Prénom={hit.author} /></div>,
    );
  }

  render() {
    return (
      <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Vos missions</h5>
            </div>
            <TitleTable />
            {this.renderTitle()}
          </CardBody>
        </Card>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return { hits: state.hits };
}

export default connect(mapStateToProps)(ListOfExperts);
