import React from 'react';
import {
  Card, CardBody, Col, Button,
} from 'reactstrap';
import MessageTextOutlineIcon from 'mdi-react/MessageTextOutlineIcon';

const Ava = `${process.env.PUBLIC_URL}/img/12.png`;

const ProfileMain = () => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody className="profile__card">
        <div className="profile__information">
          <div className="profile__avatar">
            <img src={Ava} alt="avatar" />
          </div>
          <div className="profile__data">
            <p className="profile__name">Paul Jacques</p>
            <p className="profile__work">Data Scientist</p>
            <p className="profile__contact">paul.jacques@gouv.fr</p>
            <p className="profile__contact">06-13-73-23-21</p>
            <Button color="primary" className="icon profile__btn"><p><MessageTextOutlineIcon /> Message</p></Button>
          </div>
        </div>
        <div className="profile__stats">
          <div className="profile__stat">
            <p className="profile__stat-number">05</p>
            <p className="profile__stat-title">Certifications</p>
          </div>
          <div className="profile__stat">
            <p className="profile__stat-number">2</p>
            <p className="profile__stat-title">Missions en cours</p>
          </div>
          <div className="profile__stat">
            <p className="profile__stat-number">5</p>
            <p className="profile__stat-title">Missions terminées</p>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default ProfileMain;
