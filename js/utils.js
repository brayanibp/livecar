function formDataToJSON(formData) {
  let data = {};
  for (let entry of formData.entries()) {
    data[entry[0]] = entry[1];
  }
  return data;
}

function setAuthToken(authToken) {
  localStorage.setItem('SESSION',authToken);
}

function getAuthToken() {
  return localStorage.getItem('SESSION');
}

function removeAuthToken() {
  localStorage.removeItem('SESSION');
}