/* eslint-disable no-alert */

export default (async function showResults(values) {
  fetch('http://localhost:5000/dummy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values, null, 2),
  });
  console.log(JSON.stringify(values, null, 2));
  window.alert('Nouveau projet créé');
}

);
