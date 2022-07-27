function formDataToJSON(formData) {
  let data = {};
  for (let entry of formData.entries()) {
    data[entry[0]] = entry[1];
  }
  return data;
}