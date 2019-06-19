import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import Divider from '@material-ui/core/Divider';
import Summary from './Summary';

const API = 'http://localhost:8919/api/cohesion.mission.Mission';

class JustifyTabsBorderedTop extends PureComponent {
  constructor() {
    super();
    this.state = {
      activeTab: '1',
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }

  toggle = (tab) => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  renderTitle() {
    const { hits } = this.state;
    return hits.map(
      hit => <div key={hit.titre}> <Summary title={hit.titre} /></div>,
    );
  }

  render() {
    const { activeTab } = this.state;

    return (
      <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Vos missions</h5>
            </div>
            <div className="tabs tabs--justify tabs--bordered-top">
              <div className="tabs__wrap">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => {
                        this.toggle('1');
                      }}
                    >
                      Vos demandes
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => {
                        this.toggle('2');
                      }}
                    >
                      Vos contributions
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Divider />
                    <ul>
                      {this.renderTitle()}
                    </ul>
                  </TabPane>
                  <TabPane tabId="2">
                    <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
                      use tolerably dependent listening men. No peculiar in handsome together unlocked do by.
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
                      use tolerably dependent listening men. No peculiar in handsome together unlocked do by.
                    </p>
                  </TabPane>
                  <TabPane tabId="4">
                    <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
                      use tolerably dependent listening men. No peculiar in handsome together unlocked do by. Article
                      concern joy anxious did picture sir her.
                    </p>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return { hits: state.hits };
}

export default connect(mapStateToProps)(JustifyTabsBorderedTop);
