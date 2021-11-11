"use strict";

// Por vezes e interessante que um parametro esteja definido como default
// Podemos definir como default direto nos parametros
const bookings = [];

const createBooking = function (flightNum, numPass = 2, price = 199 * numPass) {
  // podemos passar calculos como default
  const booking = {
    flightNum,
    numPass,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH2312"); // como nao especificamos os outros parametros eles estao como indefinidos e os default sao chamados

createBooking("LH2312", 200, 1000);

// se nao quisermos passar o segundo parametro o chamamos como undefined
createBooking("LH123", undefined, 1000);
