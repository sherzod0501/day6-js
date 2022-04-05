let one = Number(prompt('1-raqamingizni kiriting'));
let amal = prompt('Amlni kiriting');
let two = Number(prompt('2-raqamingizni kiriting'));


if (one || two){
    if (amal == '*') {
        console.log('Javobingiz', one * two);
    }
    if (amal == '/') {
        console.log('Javobingiz', one / two);
    }
    if (amal == '+') {
        console.log('Javobingiz', one + two);
    }
    if (amal == '-') {
        console.log('Javobingiz', one - two);
    }
    if (amal == '%') {
        console.log('Javobingiz', one % two);
    }
}
else {
    console.log ('raqam kiritilmadi')
}



