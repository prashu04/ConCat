// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

//Unused function
function validateForm() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
}

function calculatePrice() {
    var x = document.getElementById("noOfIntentions");
    var i = x.selectedIndex;
    var noIntentions = x.options[i].text;

    document.getElementById("selectedNoIntentions").innerHTML = noIntentions;

    var m = document.getElementById("massDate").value;
    const d = new Date(m);
    var n = d.getDay();
    var selPrice;
    var s = document.getElementById("massType").checked;

    //If mass date is a weekend OR if special condition is applied
    if (n < 1 || n > 5 || s) {
        document.getElementById("selectedPrice").innerHTML = "Rs 100";
        selPrice = 100;
    } else {
        document.getElementById("selectedPrice").innerHTML = "Rs 50";
        selPrice = 50;
    }

    document.getElementById("totalAmount").innerHTML = noIntentions * selPrice;
    return noIntentions * selPrice;
}

function submitIntention() {
    //validateForm();
    alert("Intention submitted successfully!");
}

//Logic when No. of Intentions is selected
document.getElementById("noOfIntentions").onclick =
    function() {
        calculatePrice();
    }

//Logic when Mass Date is selected
document.getElementById("massDate").onchange =
    function() {
        calculatePrice();
    }

//Logic when Mass Date is selected
document.getElementById("massType").onchange =
    function() {
        calculatePrice();
    }