// validating first form
function validatePizza() {
    var quantity=document.getElementById("pizza-number").value;

    if (formName.type.value=="") {
        alert("Select your favorite flavour");
        return false;
    }
    else if (formName.size.value=="") {
        alert("Select the size of the Pizza");
        return false;
    }
    else if (formName.crust.value=="") {
        alert("Select your favorite crust");
        return false;

    }
    else if (formName.topping.value=="") {
        alert("Select your favorite toppings");
        return false;
    }
    else if (quantity <= 0) {
        alert("your order should be one or more");
        return false;
    }


    var deliver = document.getElementById("delivery").checked;
    var noDeliver = document.getElementById("delivery1").checked;

    if (deliver == false && noDeliver == false) {
        alert("check a button to proceed")
        return false;
    }


    var name = document.getElementById("name").value;
    var location = document.getElementById("location").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    if (name == "" || name.length < 3) {
        alert("Provide a valid name:");
        return false;
    }
    else if (phoneNumber == "" || phoneNumber.length < 10) {
        alert("provide a valid Phone Number")
    }
    else if (location == "" || location.length < 3) {
        alert("Provide a valid location");
        return false;
    }
    else {
        alert("your order will be delivered to your location at a fee of kshs.300");
    }
}



// building a constructor
function MakeOrder(type, size, crust, topping, quantity) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.quantity = quantity;
}

// returning the prices of crust
MakeOrder.prototype.getCrust = function () {
    if (this.crust == 1) {
        return 80
    }
    else if (this.crust == 2) {
        return 150
    }
    else if (this.crust == 3) {
        return 120
    }
    else if (this.crust == 4) {
        return 100
    };
}

// returning the prices of toppings
MakeOrder.prototype.getTopping = function () {
    if (this.topping == 1) {
        return 100
    }
    else if (this.topping == 2) {
        return 120
    }
    else if (this.topping == 3) {
        return 150
    }
    else if (this.topping == 4) {
        return 180
    }
    else if (this.topping == 5) {
        return 150
    }

}
// returning the price  of Pizza 
MakeOrder.prototype.getSize = function () {
    if (this.type == 1) {
        if (this.size == 1) {
            return 600
        }
        else if (this.size == 2) {
            return 900
        }
        else if (this.size == 3) {
            return 1200
        };

    }
    else if (this.type == 2) {
        if (this.size == 1) {
            return 550
        }
        else if (this.size == 2) {
            return 900
        }
        else if (this.size == 3) {
            return 1250
        }
    }
    else if (this.type == 3) {
        if (this.size == 1) {
            return 600
        }
        else if (this.size == 2) {
            return 900
        }
        else if (this.size == 3) {
            return 1200
        }
    }
    else if (this.type == 4) {
        if (this.size == 1) {
            return 600
        }
        else if (this.size == 2) {
            return 900
        }
        else if (this.size == 3) {
            return 1200
        }
    }
    else if (this.type == 5) {
        if (this.size == 1) {
            return 600
        }
        else if (this.size == 2) {
            return 900
        }
        else if (this.size == 3) {
            return 1200
        }
    }
    else if (this.type == 6) {
        if (this.size == 1) {
            return 650
        }
        else if (this.size == 2) {
            return 850
        }
        else if (this.size == 3) {
            return 1250
        }
        else {
            return false;
        }
    }
}

$(document).ready(function () {
    $("form").submit(function (event) {
        var inputType = parseInt($("#type option:selected").val());
        var inputSize = parseInt($("#size option:selected").val());
        var inputCrust = parseInt($("#crust option:selected").val());
        var inputTopping = parseInt($("#topping option:selected").val());
        var quantity = parseInt($(".quantity").val());
        var name = $("#name").val();
        var location = $("#location").val();
        var newOrder = new MakeOrder(inputType, inputSize, inputCrust, inputTopping);
        var newPizzaPrice = (newOrder.getSize() + newOrder.getCrust() + newOrder.getTopping()) * quantity;
        alert("Congratulation " + name + ", Delivery will be done in a Short while at this Location Name: " + location + " Total cost: " + newPizzaPrice);
        event.preventDefault();
    })

});


$(document).ready(function () {
    $("#delivery").click(function (event) {
        $("#hidden").show();
        // event.preventDefault();
    });
    $("#sub-button").click(function (event) {
        event.preventDefault();

        $(".display-totals,#submButton").toggle();
        $("#sub-button").toggle();
        $("#pflavour").text($("#type option:selected").text());
        $("#pSize").text($("#size option:selected").text());
        $("#pCrust").text($("#crust option:selected").text());
        $("#pTop").text($("#topping option:selected").text());
        $("#pNumber").text($(".quantity").val());


    });
});



