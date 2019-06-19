import React from 'react';
import {
  Button, ButtonToolbar,
} from 'reactstrap';
import TimeLineItem from '../../../../shared/components/TimeLineItem';

const TimelineHistory = () => (
  <div className="timeline">
    <TimeLineItem type="work" title="Machine Learning" date="120 pts">
      <p>Maître</p>
    </TimeLineItem>
    <TimeLineItem type="work" title="Marketing" date="30 pts">
      <p>Compétent
      </p>
    </TimeLineItem>
    <TimeLineItem type="work" title="Communication" date="70 pts">
      <p>Expert
      </p>
    </TimeLineItem>
    <ButtonToolbar className="form__button-toolbar">
      <Button color="primary" className="rounded" outline><a href="/forms/basic_form">Créer une compétence</a></Button>
    </ButtonToolbar>
  </div>
);

export default TimelineHistory;
