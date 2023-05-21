// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  switch (role) {
    case "ceo":
      console.log(role + " = " + 2200);
      break;
    case "manager":
      console.log(role + " = " + 1800);
      break;
    case "cto":
      console.log(role + " = " + 1800);
      break;
    case "developer":
      console.log(role + " = " + 1500);
      break;
    case "default":
      console.log(role + " = " + 1000);
      break;
    default:
      console.log("you are not an emplyee")
      break;
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

/* console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary); */