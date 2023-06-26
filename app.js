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
