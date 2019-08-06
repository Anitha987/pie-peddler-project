function yourChoice(size,crust,toppings,quantity){
    this.pizzaSize=size;
    this.pizzaCrust=crust;
    this.pizzaToppings=toppings;
    this.pizzaQuantity=quantity;
    }
    yourChoice.prototype.fullpackage=function(){
        return "Your order is"+this.pizzaSize+""+this.pizzaCrust+""+this.pizzaToppings +"" +this.Quantity+""
    }
    $(document).ready(function(){
        $("#submit").click(function(event){
        event.preventDefault();
        var pizzaSize=$("select#wendy").val();
        var pizzaCrust=$("select#anitha").val();
        var pizzaToppings=$("select#rwaka").val();
        var pizzaQuantity=$("select#esther").val();
        if((pizzaSize=='small')&&(pizzaCrust=='Fast food pizza')&&(pizzaToppings=='mushrooms')){
            newCost=500;
            var newSum=newCost*Quantity;
        }
        });
    }); 