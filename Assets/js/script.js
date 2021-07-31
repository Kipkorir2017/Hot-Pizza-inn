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
    else {
        alert("your order will be delivered to your location at a fee of kshs.300");
    }
   
}
function MakeOrder(type,size,crust,topping,quantity){
    this.type=type;
    this.size=size;
    this.crust=crust;
    this.topping=topping;
    this.quantity=quantity;
}
// returning the prices of crust
MakeOrder.prototype.crust=function(){
    if(this.crust==1){
        return 100;
    }
    if(this.crust==2){
        return 80;
    }
    if(this.crust==3){
        return 150;
    }
    if(this.crust==4){
        return 180;
    }
}
// returning the prices of toppings
MakeOrder.prototype.topping=function(){
    if(this.topping==1){
        return 100;
    }
    if(this.topping==2){
        return 120
    }
    if(this.topping==3){
        return 150;
    }
    if(this.topping==4){
        return 180;
    }
    if(this.topping==5){
        return 200;
    }
    if(this.topping==6){
        return 250;
    }

}
// returning the price  of Pizza 
MakeOrder.prototype.type=function(){
    if(this.type==1){
        if(this.size=1){
            return 600;
        }
        else if(this.size==2){
            return 900;
        }
        else if(this.size==3){
            return 1200;
        }

    }
    else if(this.type==2){
        if(this.size==1){
            return 550;
        } 
        else if(this.size==2){
            return 650;
        }
        else if(this.size==3){
            return 1250;
        }
    }
    else if(this.type==3){
        if(this.size=1){
            return 600;
        }
        else if(this.size==2){
            return 750;
        }
        else if(this.size==3){
            return 1450;
        }
    }
    else if(this.type==4){
        if(this.size==1){
            return 400
        }
        else if(this.size==2){
            return 800;
        }
        else if(this.size==3){
            return 1600
        }
    }
    else if(this.type==5){
        if(this.size==1){
            return 350;
        }
        else if(this.size==2){
            return 700;
        }
        else if(this.size==3){
            return 1400;
        }
    }
    else if(this.type==6){
        if(this.size==1){
            return 300;
        }
        else  if(this.size==2){
            return 750;
        }
        else if(this.size==3){
            return 1450;
        }
    }
}
























// jquerry to show hidden elements
$(document).ready(function(){
    $("#sub-button").click(function(event){
        $(".form2").show();
        // event.preventDefault();
    });
    $("#button-checkout").click(function(event){
        // event.preventDefault();
        $(".display-totals").show();
    })
});

