document.getElementById("donationAmount").onchange =
    function() {
        document.getElementById("totalAmount").innerHTML = document.getElementById("donationAmount").value;
    }

function submitDonation() {
    //validateForm();
    alert("Donation submitted successfully!");
}