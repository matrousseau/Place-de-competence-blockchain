import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';

class SidebarContent extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink title="Mon Profil" route="/account/profile" onClick={this.hideSidebar} />
          <SidebarLink title="Proposer mon aide" route="/default_pages/project_summary" onClick={this.hideSidebar} />
          <SidebarLink title="Bourse aux compétences" route="/e-commerce/catalog" onClick={this.hideSidebar} />
          <SidebarLink title="Map des entités" route="/dashboard_default" onClick={this.hideSidebar} />
        </ul>
        <ul className="sidebar__block">
          <SidebarLink title="Déconnexion" icon="exit" route="/log_in" />
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
