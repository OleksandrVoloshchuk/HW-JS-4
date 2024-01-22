let operation = prompt("Виберіть операцію (add, sub, mult, div):");

let number1 = Number(prompt("Введіть перше число:"));
let number2 = Number(prompt("Введіть друге число:"));

switch (operation) {
    case "add":
        alert(number1 + " + " + number2 + " = " + (number1 + number2));
        break;
    case "sub":
        alert(number1 + " - " + number2 + " = " + (number1 - number2));
        break;
    case "mult":
        alert(number1 + " * " + number2 + " = " + (number1 * number2));
        break;
    case "div":
        alert(number1 + " / " + number2 + " = " + (number1 / number2));
        break;
}