/* Задание: (Рандомные примеры)
            Пользователь вводит количество решаемых им примеров
            И функции Пользователю отдает рандомные числа и рандомные знаки для решаемых примеров
            После примера отдается сообщение:
                Ваш ответ верный - 2 
                    или
                Ваш ответ не верный - 2! Правильный ответ - 3! */

var a = +prompt('Введите количество примеров');
function num1() {
    var b = Math.floor(Math.random() * 12 + 1); 
    return b;
  }
function num2() {
   var c = Math.floor(Math.random() * 9 + 1);
    return c;
  }
  
  
for (let i = 0; i < a; i++) {

 var s = Math.floor(Math.random() * 4 + 1);
  var ch1 = num1();
  var ch2 = num2()

    if (s == 1) {
        var m = +prompt(ch1 + "*" + ch2);
        if (m == (ch1 * ch2)) {
            console.log("Ваш ответ верный - " + m);
        }
        else {
            console.log("Ваш ответ неверный - " + m + ". Правильный ответ - " + (ch1 * ch2));
        }
    }
    else if (s == 2) {
        var l = +prompt(ch1 + "/" + ch2);
        if (l == (ch1 / ch2)) {
            console.log("Ваш ответ верный - " + l);
        }
        else {
            console.log("Ваш ответ неверный - " + l + ". Правильный ответ - " + (ch1/ch2));
        }
    }
    else if (s == 3) {
        var d = +prompt(ch1 + "+" + ch2);
        if (d == (ch1 + ch2)) {
            console.log("Ваш ответ верный - " + d);
        }
        else {
        console.log("Ваш ответ неверный - "  + d +". Правильный ответ - " + (ch1 +ch2));
        }
    }
    else if (s == 4) {
        var e = +prompt(ch1 + "-" + ch2);
        if (e == (ch1 - ch2)) {
            console.log("Ваш ответ верный - " + e );
        }
        else {
        console.log("Ваш ответ неверный - "  + e +". Правильный ответ - " + (ch1-ch2));
        }
    }


}






