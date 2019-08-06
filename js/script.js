function yourChoice(size,crust,toppings,quantity){
this.pizzaSize=size;
this.pizzaCrust=crust;
this.pizzaToppings=toppings;
this.pizzaQuantity=quantity;
}
yourChoice.prototype.fullpackage=function(){
    return "Your order is"+this.pizzaSize+""+this.pizzaCrust+""+this.pizzaToppings +"" +this.Quantity+""
}


$(document).ready(function() {
    $("#submit").click(function(event){
    event.preventDefault();
    var pizzaSize=$("select#wendy").val();
    console.log(pizzaSize);
    var pizzaCrust=$("select#anitha").val();
    var pizzaToppings=$("select#rwaka").val();
    var pizzaQuantity=$("select#esther").val();
    if((pizzaSize=='small')&&(pizzaCrust=='Fast food pizza')&&(pizzaToppings=='mushrooms')){
        newCost=500;
        var newSum=newCost*pizzaQuantity;
        console.log(newSum);    
    }
    if((pizzaSize=='small')&&(pizzaCrust=='ny style')&&(pizzaToppings=='onions')){
        newCost=800;
        var newSum=newCost*pizzaQuantity;
        // console.log(newSum);
    }
    if((pizzaSize=='small')&&(pizzaCrust=='pizza bigels')&&(pizzaToppings=='sausage')){
        newCost=1000;
        var newSum=newCost*pizzaQuantity;
        console.log(newSum);
    }
    if((pizzaSize=='medium')&&(pizzaCrust=='Fast food pizza')&&(pizzaToppings=='bacon')){
        newCost=700;
        var newSum=newCost*pizzaQuantity;
        console.log(newSum);
    }
    if((pizzaSize=='large')&&(pizzaCrust=='Fthin crust')&&(pizzaToppings=='extra cheese')){
        newCost=600;
        var newSum=newCost*pizzaQuantity;
        console.log(newSum);
    }
    if((pizzaSize=='x-large')&&(pizzaCrust=='chicago')&&(pizzaToppings=='black olives')){
        newCost=900;
        var newSum=newCost*pizzaQuantity;
        console.log(newSum);
    }
    if((pizzaSize=='medium')&&(pizzaCrust=='Fflat bread')&&(pizzaToppings=='green peppers')){
        newCost=800;
        var newSum=newCost*pizzaQuantity;
        console.log(newSum);
    }
    if((pizzaSize=='large')&&(pizzaCrust=='napolian')&&(pizzaToppings=='spinach')){
        newCost=700;
        var newSum=newCost*pizzaQuantity;
        console.log(newSum);
    }
    if((pizzaSize=='x-large')&&(pizzaCrust=='silician')&&(pizzaToppings=='pineapple')){
        newCost=1000;
        var newSum=newCost*pizzaQuantity;
        console.log(newSum);
    }
    // $("h3#house").append("");
    });
});