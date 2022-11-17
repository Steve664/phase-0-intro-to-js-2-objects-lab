// Write your solution in this file!
const employee = {
  name: "Steve",
  streetAddress: "Nairobi",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, ...{ [key]: value } };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const objNew = { ...employee };
  delete objNew[key];

  return objNew;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];

  return employee;
}
