/* eslint-disable no-alert */
import swal from 'sweetalert';

export default (async function showResults(values) {
  console.log(JSON.stringify(values, null, 2));
  swal('Smart contract créé !', 'Vous faites désormais parti de la mission.', 'success');
}
);
