// validating first form
function validatePizza() {
    var quantity = document.getElementById("pizza-number").value;

    if (formName.fieldAreaType.value == "") {
        alert("Select your favorite flavour !");
        return false;
    }
    else if (formName.fieldAreaSize.value == "") {
        alert("Select the size of the Pizza");
        return false;
    }
    else if (formName.fieldAreaCrust.value == "") {
        alert("Select your favorite crust");
        return false;

    }
    else if (formName.fieldAreaTopping.value == "") {
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
        alert("checked a button to proceed")
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
MakeOrder.prototype.crust = function () {
    if (this.crust == 1) {
        return 100;
    }
    if (this.crust == 2) {
        return 80;
    }
    if (this.crust == 3) {
        return 150;
    }
    if (this.crust == 4) {
        return 180;
    }
}
// returning the prices of toppings
MakeOrder.prototype.topping = function () {
    if (this.topping == 1) {
        return 100;
    }
    if (this.topping == 2) {
        return 120
    }
    if (this.topping == 3) {
        return 150;
    }
    if (this.topping == 4) {
        return 180;
    }
    if (this.topping == 5) {
        return 200;
    }
    if (this.topping == 6) {
        return 250;
    }

}
// returning the price  of Pizza 
MakeOrder.prototype.type = function () {
    if (this.type == 1) {
        if (this.size = 1) {
            return 600;
        }
        else if (this.size == 2) {
            return 900;
        }
        else if (this.size == 3) {
            return 1200;
        }

    }
    else if (this.type == 2) {
        if (this.size == 1) {
            return 550;
        }
        else if (this.size == 2) {
            return 650;
        }
        else if (this.size == 3) {
            return 1250;
        }
    }
    else if (this.type == 3) {
        if (this.size = 1) {
            return 600;
        }
        else if (this.size == 2) {
            return 750;
        }
        else if (this.size == 3) {
            return 1450;
        }
    }
    else if (this.type == 4) {
        if (this.size == 1) {
            return 400
        }
        else if (this.size == 2) {
            return 800;
        }
        else if (this.size == 3) {
            return 1600
        }
    }
    else if (this.type == 5) {
        if (this.size == 1) {
            return 350;
        }
        else if (this.size == 2) {
            return 700;
        }
        else if (this.size == 3) {
            return 1400;
        }
    }
    else if (this.type == 6) {
        if (this.size == 1) {
            return 300;
        }
        else if (this.size == 2) {
            return 750;
        }
        else if (this.size == 3) {
            return 1450;
        }
    }
}

$(document).ready(function () {
    $("#submButton").click(function (event) {
        var inputType = parseInt($("#fieldAreaType option:selected").val());
        var inputSize = parseInt($("#fieldAreaSize option:selected").val());
        var inputCrust = parseInt($("#fieldAreaCrust option:selected").val());
        var inputTopping = parseInt($("#fieldAreaTopping option:selected").val());
        var quantity = parseInt($(".quantity").val());
        var newOrder = (inputType, inputSize, inputCrust, inputTopping, quantity);
        var newPizzaPrice = (newOrder.Size() + newOrder.crust() + newOrder.topping()) * quantity
        alert(inputType)
        alert(newPizzaPrice)
        event.preventDefault();
    })

});
























// jquerry to show hidden elements
$(document).ready(function () {
    $("#delivery").click(function (event) {
        $("#hidden").show();
        // event.preventDefault();
    });
    $("#sub-button").click(function (event) {
        // event.preventDefault();
        $(".display-totals,#submButton").toggle();
        $("#sub-button").toggle();
    })
});

