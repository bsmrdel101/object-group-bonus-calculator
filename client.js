const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

//create function that takes employees as an argument
  //return new object with name, bonusPercentage, totalCompensation, totalBonus

  function newEmployee(employee) {
    let allEmployees = [];
    let employeeBonus = totalBonus(employee);
      
    let employeesList = {
      name: employee.name,
      totalBonus: employeeBonus,
      totalCompensation: Number(employeeBonus) + Number(employee.annualSalary),
      bonusPercentage: percentage(employee, employeeBonus)
    }
    allEmployees.push(employeesList);
    return allEmployees;
  }

//loop through employees, check review rating
//assign percentages using a conditional
function bonusCalcOne(employee) {
  if (employee.reviewRating === 5) {
    return employee.annualSalary * 0.1;
  } else if (employee.reviewRating === 4) {
    return employee.annualSalary * .06;
  } else if (employee.reviewRating === 3) {
    return employee.annualSalary * .04;
  } else {
    return 0;
  }
}

function bonusCalcTwo(employee) {
  //detect if number is 4 digits
  if (employee.employeeNumber.length === 4) {
    return employee.annualSalary * .05;
  } else {
    return 0;
  }
}

function totalBonus(employee) {
  let bonusOne = bonusCalcOne(employee);
  let bonusTwo = bonusCalcTwo(employee);
  let totalBonus = bonusOne + bonusTwo;

  if (employee.annualSalary > 65000) {
    totalBonus *= .99;
  }
  if (totalBonus > employee.annualSalary * .13) {
    totalBonus = employee.annualSalary * .13;
  } else if (totalBonus < 0){
    totalBonus = 0;
  }
  return totalBonus;
}

function percentage(employee, totalBonus) {
  percent = totalBonus / employee.annualSalary;
  return percent * 100;
}

console.log('employee 1:', totalBonus(employees[0]));
console.log('employee 2:', totalBonus(employees[1]));
console.log('employee 3:', totalBonus(employees[2]));
console.log('employee 4:', totalBonus(employees[3]));
console.log('employee 5:', totalBonus(employees[4]));
console.log('-----');

for (let i = 0; i < employees.length; i++) {
  console.log(newEmployee(employees[i]));
}

//totalBonus / annuel salery