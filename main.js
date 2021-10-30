// Практика , ч4. Используем объекты
// ======================

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

// Ниже Код из предыдущего домашнего задания:
// ======================
/*
let numberOfFilms;

function start() {
  numberOfFilms = Number(prompt(`Сколько фильмов вы уже посмотрели?`));
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = Number(prompt(`Сколько фильмов вы уже посмотрели?`));
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?"),
      b = prompt("На сколько оцените его?");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();
*/

// Далее будем заниматься рефакторингом предыдущего кода из практики 3 т.е. переписыванием кода выше под новый синтаксис и новые условия

// SOLUTION
// ======================
/*

// #1
// ----------------------
// let numberOfFilms;
// т.о. удаляем глобальную переменную 'let numberOfFilms' т.к. мы нет уже надобности ее использовать

// create object with some data values - создаем объект базы данных
// ......................
const personalMovieDB = {
  // создаем свойства которые описывают нашу базу данных
  // create variable with initial value of 0
  count: 0,
  // create empty nested object
  movies: {},
  // create empty nested object
  actors: {},
  // create empty array
  genres: [],
  // create boolean variable with initial value of false
  privat: false,

  // NOTE: These variables will be modified & updated with values that user entered & methods that used those values to put into variables to update variables

  // #1.1 create object method for current object variable 'personalMovieDB' т.е. мы переместили функцию 'function start(){}' во внутрь объекта в качестве метода данного объекта personalMovieDB
  // ....................
  start: function () {
    // помещаем ответ пользователя в переменную 'count'
    personalMovieDB.count = Number(
      prompt(`Сколько фильмов вы уже посмотрели?`, "")
    );

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = Number(
        prompt(`Сколько фильмов вы уже посмотрели?`, "")
      );
    }
  },
  // т.о. данный метод 'start' запускается и введенные данные пользователем будут записываться и помещаться в переменную 'count'

  // #1.2 create another custom object method for current object 'personalMovieDB'
  // ....................
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?"),
        b = prompt("На сколько оцените его?");
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  // т.о. данный метод 'rememberMyFilms' запускается и введенные данные пользователем будут записываться и помещаться в пустой объект переменную 'movies'

  // #1.3 create another custom object method for current object 'personalMovieDB'
  // ....................
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  // т.о. данный метод 'detectPersonalLevel' операется на переменную 'count' де визначає особисті рівень кіномана запускается и сравнивает данные и выводит соответствующий данные и информацию для пользователя в консоль

  // #1.4 create another custom object method for current object 'personalMovieDB'
  // ....................
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  // т.о. данный метод при запуске его будет показывать нашу базу данных

  // #2 Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat
  // --------------------
  toggleVisibleMyDB: function () {
    // создаем классический шаблон переключателя toggler

    // проверка если правтность 'privat' установлена 'true' то выключаем ее, а если не установлена 'false' то включаем ее т.е. делаем 'true'
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  // #1.5 create another custom object method for current object 'personalMovieDB'
  // ....................
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      // #3
      // ----------------
      // #3.1 запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. Если он это сделал - возвращать его к этому же вопросу.
      // ................
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      // #3.1 далее проверка если на пустую строку '', на то что пользователь ничего не ввел null
      if (genre === "" || genre === null) {
        console.log("Вы ввели некорректные данные или не ввели их вовсе");

        // #3.1 возвращаемся к вопросу назад
        i--;

        // #3.1 а иначе если пользователь ввел все корректно
      } else {
        // #3.1 введенные данные помещаем в переменную 'genres'
        personalMovieDB.genres[i - 1] = genre;
      }
    }

    // #3.2 После того, как все жанры введены - при помощи метода forEach вывести в консоль сообщения
    // ..................
    personalMovieDB.genres.forEach((item, idx) => {
      // выводим сообщения жанров в консоль
      console.log(`Любимый жанр ${idx + 1} - это ${item}`);
    });
    // т.о. item - каждый элемент в массиве который мы перебираем т.е. жанр 1, жанр 2, и т.д., idx - это индекс, и номер по попорядку 1, 2 и т.д. И 'i + 1' означает нумерация начинается с 1, а не с 0
  },
  // т.о. данный метод запускается и запоминает все жанры фильмов которые ввел пользователь и помещает их в переменную 'genres'
};
// т.о. мы создали основной объект который состоит из свойств данных которые описывают нашу базу данных 'count, movies, actors, genres, privat', а также из методов которые что-то делают либо с внешними данными либо модифицируют и изменяют нашу базу данных 'personalMovieDB' и которые были преобразованы из function declarations into current object methods of current object 'personalMovieDB'

// to test in console
console.log(personalMovieDB.start());
// result: user enters 222 or so

console.log(personalMovieDB);
// result: {count: 222, movies: {…}, actors: {…}, genres: Array(0), privat: false, …}

// #3.3 to test
console.log(personalMovieDB.writeYourGenres());
// result: Любимый жанр 1 - это life Любимый жанр 2 - это life Любимый жанр 3 - это life

console.log(personalMovieDB);
// result: {count: 22, movies: {…}, actors: {…}, genres: Array(3), privat: false, …}

// т.о. мы видим что genres: Array(3)

// ИТОГИ: задание выполнено

*/
// END OF SOLUTION

// ======================
// ANOTHER SOLUTION BELOW
// ======================

// Далее есть и другой вариант реализации данной задачи в методе writeYourGenres() с помощью js метода split(', ') где мы задаем пользователю один вопрос и пользователь через запятую пишет название жанров, а уже метод 'split()' разбивает их на отдельные элементы массова и помещает в базуданных - personalMovieDB.genres

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = Number(
      prompt(`Сколько фильмов вы уже посмотрели?`, "")
    );

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = Number(
        prompt(`Сколько фильмов вы уже посмотрели?`, "")
      );
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?"),
        b = prompt("На сколько оцените его?");
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  // Делаем изменения в данном методе, цикл запускаем 1 раз 'i < 2'
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      // if (genre === "" || genre === null) {
      //   console.log("Вы ввели некорректные данные или не ввели их вовсе");
      //   i--;
      // } else {
      //   personalMovieDB.genres[i - 1] = genre;
      // }

      let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
			// т.о. если пользователь введет заглавную букву то мы ее преобразуем в нижний регистр чтоб отсортировалось корректно по алфавиту 

      if (genres === "" || genres === null) {
        console.log("Вы ввели некорректные данные или не ввели их вовсе");
        i--;
      } else {
        personalMovieDB.genres = genres.split(", ");

        // отсортируем элементы по алфавиту
        personalMovieDB.genres.sort();
      }
    }
    // т.о. мы задаем пользователю один вопрос и пользователь через запятую пишет название жанров, а уже метод 'split()' разбивает их на отдельные элементы массова и помещает в базуданных - personalMovieDB.genres

    personalMovieDB.genres.forEach((item, idx) => {
      console.log(`Любимый жанр ${idx + 1} - это ${item}`);
    });
  },
};
personalMovieDB.writeYourGenres();
// Например пользователь ввел такие данные comedy, drama, action

// result: 
/*
Любимый жанр 1 - это action
Любимый жанр 2 - это comedy
Любимый жанр 3 - это drama
*/

// Например пользователь ввел такие данные Бабушка, ангел
/*
Любимый жанр 1 - это ангел
Любимый жанр 2 - это Бабушка
*/


// т.о. мы видим в результате отсортированные по алфавиту название жанров введенных пользователем. Тут мы использовали альтернативный способо с помощью метода 'split()'

// NOTE: также важно учитывать регистр нижний или заглавный введенных значений чтоб отсортировать корректно по алфавиту т.к. по встроенному коду идут сначала заглавные буквы а потом маленькие, а для этого используйте js method 'toLowerCase()' 
