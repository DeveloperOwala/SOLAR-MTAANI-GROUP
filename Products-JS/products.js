// Declairing objects

function pizza(name) {
  this.pizzaName = name;
}


pizza.prototype.nameSize = function() {
  if (this.pizzaName === "Cheeseburger.") {
      return "Cheeseburger.";
  }else if(this.pizzaName === "Meat-Deluxe.") {
      return "Meat-Deluxe.";
  }else if(this.pizzaName === "Hawaiian-BBQ.") {
      return "Hawaiian-BBQ.";
  }else if(this.pizzaName === "Crispy pizza.") {
      return "Crispy pizza.";
  }else if(this.pizzaName === "Stuffed-pizza.") {
      return "Stuffed-pizza.";
  }else if(this.pizzaName === "Gluten-free.") {
      return "Gluten-free.";
  }else if(this.pizzaName === "veggie-feast.") {
      return "veggie-feast.";
  }else if(this.pizzaName === "Meat-Deluxe.") {
      return "Meat-Deluxe.";
  }else {
      alert("You MUST choose the pizza category");
  };
}

function size(name) {
  this.sizeName = name;
}

size.prototype.priceSize = function() {
  if (this.sizeName === "large") {
      // alert("Large");
      return 1500;
  } else if(this.sizeName === "medium") {
      // alert("Not large");
      return 1150;
  } else if(this.sizeName === "small") {
      return 900;
  } else {
      alert("Please select a pizza size");
  }
}

function crust(name) {
  this.crustName = name;
}

crust.prototype.crustPrice = function() {
  if (this.crustName === "cheese") {
      // alert("cheese");
      return 100;
  } else if (this.crustName === "thin") {
      return 70;
  } else if (this.crustName === "neapolitan") {
      return 120;
  } else {
      alert("Please select a prefferable crust to continue");
  }
}

function topping(name) {
  this.toppingName = name;
}

topping.prototype.toppingPrice = function() {
  if (this.toppingName === "Pepperoni") {
      return 10;
  } else if (this.toppingName === "Mushrooms") {
      return 40;
  } else if (this.toppingName === "Onions") {
      return 15;
  } else if (this.toppingName === "Sausage") {
      return 20;
  } else if (this.toppingName === "Bacon") {
      return 30;
  } else if (this.toppingName === "Extra-cheese") {
      return 10;
  } else if (this.toppingName === "Black-olives") {
      return 15;
  } else if (this.toppingName === "Green-peppers") {
      return 5;
  } else {
      alert("Please choose topping(s) of your choice");
  }
}



function quantity(name) {
  this.quantityName = name;
}

quantity.prototype.quantityPrice = function() {

}

$(document).ready(function() {
  $("#delivery").click(function() {
      alert("For to door deliveries. Please confirm by pressing ok to continue");
      prompt("Please Enter your mobile number");
      prompt("Enter your current location");
  });
});



$(document).ready(function() {
  $("#checkout").click(function() {
      event.preventDefault();




  var pizzaInput = $("#type").val();

      pizzaSelect = new pizza(pizzaInput);
      pizzaSelect.nameSize();
      // alert(pizzaSelect.nameSize());

  var sizeInput = $("#size").val();

  var pizzaSize = new size(sizeInput);
      pizzaSize.priceSize();
      // alert(pizzaSize.priceSize());

  var crustInput = $("#crust").val();
  
  var crustSize = new crust(crustInput);
      crustSize.crustPrice();
      // alert(crustSize.crustPrice());


  var toppingInput = $("#toppings").val();

  var toppingSize = new topping(toppingInput);
      toppingSize.toppingPrice();
      // alert(toppingSize.toppingPrice());


  var quantityInput = $("quantity").val();

  var  quantitySize = new quantity (quantityInput);
       quantitySize.quantityPrice();
      //  alert(quantitySize.quantityPrice());

 // calcTotal to calculate the total pizza summation

  var pizzaPrice = (parseInt(parseInt(pizzaSize.priceSize()) + parseInt(crustSize.crustPrice()) + parseInt(toppingSize.toppingPrice())));
  $("#summation").append(pizzaPrice);

  // S-size, C-crust, T-toppings N-name

  var pizzaS = (pizzaSize.priceSize());
  $("#psize").append(pizzaS);

  var pizzaC = (crustSize.crustPrice());
  $("#cprice").append(pizzaC);

  var pizzaT = (toppingSize.toppingPrice());
  $("#tprice").append(pizzaT);

  var pizzaN = (pizzaSelect.nameSize());
  $("#ptype").append(pizzaN);
  event.preventDefault();
  
  });
})

