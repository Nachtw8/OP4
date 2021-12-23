const age = 19;
const isFemale = false;
const driverStatus = 'bob';
const firstName='Bram';
const totalAmount= 30;

if (age > 18) {
    console.log('The Person is allowed in');
}  else {
    console.log ('The person is too young and is kindly requested to stay outside');
}

/* Check if the person is a woman */

if (isFemale) {
    console.log ('The Person is a woman!');
} else {
    console.log ('The person is a man!');
}

if (driverStatus == 'bob') {
    console.log ('The driver is the Bob!')
} else {
    console.log ('The person is not a Bob!')
}

if (age > 18 && age < 25) {
    console.log('You get 50% Off!');
}  else {
    console.log ('You don not  get Off!');
}

if ( age > 18  || firstName == 'Bram') {
 console.log( "Hoeray, yo get a free beer!")
}

if (totalAmount > 25 & totalAmount <= 50) {
    console.log ('You get free bitterballen');
} else if (totalAmount > 50 & totalAmount <= 100) {
        console.log ('You get portion of nachos');
} else if (totalAmount > 100) {
    console.log ('You get free bottle of champagne');
} else if (totalAmount<25) { 
    console.log("You have to drink more beer to get fee!!");}
