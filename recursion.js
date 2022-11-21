//НАПИСАНИЕ ФУНКЦИЙ ЧЕРЕЗ РЕКУРСИЮ
//Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
//n! = n * (n - 1) * (n - 2) * ...*1
function factorial(n) {
  console.log(n * factorial(n - 1));
  return n != 1 ? n * factorial(n - 1) : 1;
}
factorial(5);

//Функция Фибоначи
const fibonachi = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonachi(n - 1) + fibonachi(n - 2);
};

// console.log(fibonachi(8));
