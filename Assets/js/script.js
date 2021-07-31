// validating first form
function validatePizza(){
if (formName.fieldArea.value==""){
    alert("Kindly make a complete order first!")
    return false;
}

}
// validating second form

function validateLocation(){
    var name=document.getElementById("name").value;
    var location=document.getElementById("location").value;
    var phoneNumber=document.getElementById("phoneNumber").value;
    if(name=="" || name.length<3){
        alert("Provide a valid name:");
        return false;
    }
    else if(phoneNumber=="" || phoneNumber.length<10){
        alert("provide a valid Phone Number")
    }
    else if(location=="" || location.length<3){
        alert("Provide a valid location");
        return false;
    }
   
}
function MakeOrder(type,size,crust,topping,quantity){
    this.type=type;
    this.size=size;
    this.crust=crust;
    this.topping=topping;
    this.quantity=quantity;
}
























// jquerry to show hidden elements
$(document).ready(function(){
    $("#display").click(function(event){
        $(".delivery").show();
        event.preventDefault();
    });
    $("#button-checkout").click(function(event){
        event.preventDefault();
        $(".display-totals").show();
    })
});

$("")