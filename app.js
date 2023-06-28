let numberOfDay = prompt("Task1. Введіть номер дня тижня:");
function weekFn(n) {
  let dayOf;
  switch (n) {
    case "1":
      dayOf = "Monday";
      break;
    case "2":
      dayOf = "Tuesday";
      break;
    case "3":
      dayOf = "Середа";
      break;
    case "4":
      dayOf = "Thursday";
      break;
    case "5":
      dayOf = "Friday";
      break;
    case "6":
      dayOf = "Saterday";
      break;
    case "7":
      dayOf = "Sunday";
      break;
    default:
      dayOf = null;
  }
  return dayOf;
}
alert(
  "Task1. Для номера дня тижня " +
    numberOfDay +
    " відповідає " +
    weekFn(numberOfDay)
);
/*____________________________TASK2-------------------------*/
let first = +prompt("Введіть перше число: ");
let second = +prompt("Введіть друге число: ");
let flag = prompt("Введіть 1-True, 2-false: ");
alert(foo(5, 8, false));
function foo(a1, b1, c1) {
  let zmIn;
  let zmDe;

  if (a1 > b1) {
    zmIn = a1;
    zmDe = b1;
  } else {
    zmIn = b1;
    zmDe = a1;
  }
  console.log(zmIn, zmDe, c1);
  if (c1 == true) {
    return zmIn;
  } else {
    return zmDe;
  }
}
/*--------------------------------TASK3----------------------*/
let count = +prompt("Введіть кількість категорій виплат за мин. місяць (4): ");
let kat1 = prompt("Введіть назву категорії 1 виплати за мин. місяць: ");
let sum1 = +prompt(
  "Введіть суму виплат категорії 1 виплати за мин. місяць, грн: "
);
let kat2 = prompt("Введіть назву категорії 2 виплати за мин. місяць: ");
let sum2 = +prompt(
  "Введіть суму виплат категорії 2 виплати за мин. місяць, грн: "
);
let kat3 = prompt("Введіть назву категорії 3 виплати за мин. місяць: ");
let sum3 = +prompt(
  "Введіть суму виплат категорії 3 виплати за мин. місяць, грн: "
);
let kat4 = prompt("Введіть назву категорії 4 виплати за мин. місяць: ");
let sum4 = +prompt(
  "Введіть суму виплат категорії 4 виплати за мин. місяць, грн: "
);
let costs = {};
costs[kat1] = sum1;
costs[kat2] = sum2;
costs[kat3] = sum3;
costs[kat4] = sum4;

function sumCosts(costs) {
  let zagSum = 0;
  for (let x in costs) {
    zagSum += costs[x];
  }
  return zagSum;
}
alert("За минулий місяць Ви витратили " + sumCosts(costs) + " грн.");
