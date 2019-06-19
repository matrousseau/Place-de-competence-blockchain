/* eslint-disable no-alert */

export default (async function showResults(values) {
  fetch('http://localhost:8919/api/cohesion.mission.CreateMission', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values, null, 2),
  });
  console.log(JSON.stringify(values, null, 2));
}

);
