function yourChoice(size,crust,toppings,quantity){
this.pizzaSize=size;
this.pizzaCrust=crust;
this.pizzaToppings=toppings;
this.pizzaQuantity=quantity;
}
yourChoice.prototype.fullpackage=function(){
    return "Your order is"+this.pizzaSize+""+this.pizzaCrust+""+this.pizzaToppings +"" +this.pizzaQuantity+""
}


$(document).ready(function() {
    $("#submit").click(function(event){
    event.preventDefault();
    var pizzaSize=$("select#wendy").val();
    console.log(pizzaSize);
    var pizzaCrust=$("select#anitha").val();
    var pizzaToppings=$("select#rwaka").val();
    var pizzaQuantity=$("select#esther").val();
    console.log(pizzaQuantity)
    if((pizzaSize=='small')&&(pizzaCrust=='1')&&(pizzaToppings=='1')){
        newCost=500;
        var newSum=newCost*pizzaQuantity;
        console.log(newSum);    
    }
    if((pizzaSize=='small')&&(pizzaCrust=='2')&&(pizzaToppings=='2')){
        newCost=800;
        var newSum=newCost*pizzaQuantity;
        // console.log(newSum);
    }
    if((pizzaSize=='small')&&(pizzaCrust=='3')&&(pizzaToppings=='3')){
        newCost=1000;
        var newSum=newCost*pizzaQuantity;
        console.log(newSum);
    }
    if((pizzaSize=='medium')&&(pizzaCrust=='4')&&(pizzaToppings=='4')){
        newCost=700;
        var newSum=newCost*pizzaQuantity;
        console.log(newSum);
    }
    if((pizzaSize=='large')&&(pizzaCrust=='5')&&(pizzaToppings=='5')){
        newCost=600;
        var newSum=newCost*pizzaQuantity;
        console.log(newSum);
    }
    if((pizzaSize=='x-large')&&(pizzaCrust=='6')&&(pizzaToppings=='6')){
        newCost=900;
        var newSum=newCost*pizzaQuantity;
        console.log(newSum);
    }
    if((pizzaSize=='medium')&&(pizzaCrust=='7')&&(pizzaToppings=='7')){
        newCost=800;
        var newSum=newCost*pizzaQuantity;
        console.log(newSum);
    }
    if((pizzaSize=='large')&&(pizzaCrust=='8')&&(pizzaToppings=='8')){
        newCost=700;
        var newSum=newCost*pizzaQuantity;
        console.log(newSum);
    }
    if((pizzaSize=='x-large')&&(pizzaCrust=='9')&&(pizzaToppings=='9')){
        newCost=1000;
        var newSum=newCost*pizzaQuantity;
        console.log(newSum);
    }
    // $("h3#house").append("");
    });
});