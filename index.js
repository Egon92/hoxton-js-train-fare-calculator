/*- Ask the user for their age and how far they are travelling (in km)
   -- The price per travelled km will be £0.21
   -- Junior passengers (under 18) get a 20% discount
   -- Senior passengers (over 65) get a 40% discount
- Based on the answers, show a message which tells the user how much they will pay for the ride.*/

const priceKm = 0.21;
const age = Number(prompt("How old are you?"))
const kmTravel = Number(prompt("How many km are you travelling?"))

const youngAge = age<18;
const oldAge = age>65 && age<110;

// console.log(`Young age is ${youngAge}`);
// console.log(`Old age is ${oldAge}`);


const hasDiscount = youngAge || oldAge;
// console.log(`Discount will have only ${hasDiscount}`);

let normalPrice = priceKm * kmTravel;

let priceTicketUnder18 = priceKm * kmTravel * 0.2;
let priceDiscountUnder18 = priceKm * kmTravel - priceTicketUnder18;

let priceTicketOver65 = priceKm * kmTravel * 0.4;
let priceDiscountOver65 = priceKm * kmTravel - priceTicketOver65;

if(Number.isNaN(age)||Number.isNaN(kmTravel)){
   console.log(`Wrong data! Please enter the correct age and km number!`);
}else if(youngAge){
  console.log(`You get a travel price discount of ${priceDiscountUnder18}£!
You can pay only ${priceTicketUnder18}£!
Have a nice trip!`);
}else if(oldAge){
  console.log(`You get a travel price discount of ${priceDiscountOver65}£!
You can pay only ${priceTicketOver65}£!
Have a nice trip!`);
}else if(!hasDiscount) {
  console.log(`Your travel ticket costs ${normalPrice}£!
Have a nice trip!`);
}
