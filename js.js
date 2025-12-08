'use strict'
alert ('Инструкция: Вы можете использовать действия "+", "-", "*", "/"')
reset: for (;;) {
let err ='next';
let a = prompt('Введите первое число', ); 
 if (a === '') {
        continue reset;
    }
 if(a == null){
        err = confirm('Завершить работу?');
    }
    if ( err === false) {
        continue reset;
    }
    else if (err === true) {
      break;
    } 
let action = prompt('Введите требуемую операцию', );
    if (action === '') {
        continue reset;
    }
    else if(action == null){
        err = confirm('Завершить работу?');
    }
    if ( err === false) {
        continue reset;
    }
    else if (err === true) {
        break;
    }  
let b = prompt('Введите второе число', );
     if (b === '') {
   continue reset;
    } 
      else if(action == null){
        err = confirm('Завершить работу?');
    }
    if ( err === false) {
        continue reset;
    }
    else if (err === true) {
       break;
    }  
let aNam = Number(a);
let bNam = Number(b); 
function sum () {
    if (action == '+') {
        return (aNam + bNam);
    }
}
 
function sub () {
    if (action == '-') {
        return (aNam - bNam);
    } 
}
function mul () {
    if (action == '*') {
        return (aNam * bNam);
    } 
}
function div () {
    if (action == '/') {
        return (aNam / bNam);
    } 
}
let result = 
    sum () 
    || sub () 
    || mul () 
    || div ();
    let errEnd;
    let res;

    if (result === undefined) {
       errEnd = confirm('Ошибка! Начать сначала?');
    }
    else {
       res = confirm(`Результат: ${result}`);
    }

    if ( errEnd == true ) {
        continue reset;
    }
    else if ( errEnd == false ) {
        break;
    } 
    let exit;

    if (res == true) {
        continue reset;
    } 
    else if (res == false) {
        exit = confirm('Выйти из программы?');
    }  

    if (exit == true) {
        break;
    }
    else if (exit == false) {
        alert(result);
        
    }
}
