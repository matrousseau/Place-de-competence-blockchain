import React from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import renderMultiSelectField from '../../../../shared/components/form/MultiSelect';

const WizardFormTwo = ({ handleSubmit, previousPage }) => (
  <form className="form form--horizontal wizard__form" onSubmit={handleSubmit}>
    <h3 className="wizard__title">Votre mission</h3>
    <div className="form__form-group">
      <span className="form__form-group-label">Titre du projet</span>
      <div className="form__form-group-field">
        <Field
          name="titre"
          component="input"
          type="text"
          placeholder="Titre du projet"
        />
      </div>
    </div>
    <div className="form__form-group">
      <span className="form__form-group-label">Compétences</span>
      <div className="form__form-group-field">
        <Field
          name="multiSelect"
          component={renderMultiSelectField}
          options={[
            { value: '1', label: 'Python' },
            { value: '2', label: 'OVH' },
            { value: '3', label: 'Architecture de SI' },
            { value: '4', label: 'Management' },
            { value: '5', label: 'Marketing' },
            { value: '6', label: 'Graphisme' },
          ]}
        />
      </div>
    </div>
    <div className="form__form-group">
      <span className="form__form-group-label">Nombre de personnes requises</span>
      <div className="form__form-group-field">
        <Field
          name="nombre"
          component="input"
          type="int"
        />
      </div>
    </div>
    <ButtonToolbar className="form__button-toolbar wizard__toolbar">
      <Button color="primary" type="button" className="previous" onClick={previousPage}>Retour</Button>
      <Button color="primary" type="submit" className="next">Suivant</Button>
    </ButtonToolbar>
  </form>
);

WizardFormTwo.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormTwo);
