const order = {
  city: "",
};

/* if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
} */



for (let city in order) {
  if (order[city]){
    console.log(order[city]);
  } else {
    console.log('city is required');
  }
}
