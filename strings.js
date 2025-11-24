
function strings() {
    var firstName = document.getElementById("firstName").value; //get first name from input field
    var lastName = document.getElementById("lastName").value; //get last name from input field
    var zipCode = document.getElementById("zipCode").value; //get zip code from input field
    // Combine first and last name
    var combinedName = firstName + " " + lastName; 
 
    var combinedInfo = combinedName + " "  + zipCode; // Combine full name and zip code
  
    // Generate secret code by reversing the combined info string
    var secretCode = ""; // Initialize secret code variable
    var i;
    for (i=combinedInfo.length - 1; i >= 0; i--) 
        {
            secretCode += combinedInfo.charAt(i);
            
        }

    // check combined name length is not greater than 20 and zip code is exactly 5 digits

    if (combinedName.length <= 20 && zipCode.length == 5) 
    {
        document.getElementById("Secret Code").innerHTML = "Your secret code is: " + secretCode.toLowerCase(); // Display the secret code in lowercase
    }
    else 
    {
        document.getElementById("Secret Code").innerHTML = "Error: Combined name exceeds 20 characters or zip code is not exactly 5 digits."; // Display error message
    }
}
