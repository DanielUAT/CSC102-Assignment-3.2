/*var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var zipCode = document.getElementById("zipCode").value;
*/
function strings() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var zipCode = document.getElementById("zipCode").value;
    // Combine first and last name
    var combinedName = firstName + " " + lastName;
 
    var combinedInfo = combinedName + " "  + zipCode;
  

    var secretCode = "";
    var i;
    for (i=combinedInfo.length - 1; i >= 0; i--) 
        {
            secretCode += combinedInfo.charAt(i);
            
        }
    if (combinedName.length <= 20 && zipCode.length == 5) 
    {
        document.getElementById("Secret Code").innerHTML = "Your secret code is: " + secretCode.toLowerCase();
    }
    else 
    {
        document.getElementById("Secret Code").innerHTML = "Error: Combined name exceeds 20 characters or zip code is not exactly 5 digits.";
    }
}
