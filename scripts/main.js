// Default value for when the user did not enter one
const UNSPECIFIED = "unspecified";

// getName: gets the name that the user entered
function getName(){

    // Grab the first and last names
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    // If there is a first name but not a last name.
    if(firstName && !lastName){
        lastName = UNSPECIFIED;
        console.log(firstName, " ", lastName);
        return
    }

    // If there is a last name but not a first name.
    if(!firstName && lastName){
        firstName = UNSPECIFIED;
        console.log(firstName, " ", lastName);
        return
    }

    // If there is not a value for first or last name, set default values
    if(!firstName || !lastName){
        firstName = UNSPECIFIED;
        lastName = UNSPECIFIED;
        console.log(firstName, " ", lastName);
        return
    }

    console.log(firstName, " ", lastName);


    // Pass first and last name to the setter function in Go?
}

// getEmail: gets the email address that the user entered
function getEmail(){
    // Grab the email 
    let userEmail = document.getElementById("userEmail").value;

    // If no email was entered
    if(!userEmail){
        userEmail = UNSPECIFIED;
        console.log(userEmail);
        return
    }

    console.log(userEmail);

    // Call setter function
}

// getZip: gets the zip code that the user entered
function getZip(){
    // Grab the zip 
    let userZip = document.getElementById("zipCode").value;

    // If no zip code was entered, use the default value
    if(!userZip){
        userZip = UNSPECIFIED;
        console.log(userZip);
        return
    }

    console.log(userZip);

    // Call setter function
}

// getEthnicity: gets the ethnicity that the user selected
function getEthnicity(){
    // Grab the value of the selected radio button
    let selectedButton = document.querySelector('input[type=radio][name=ethnicity]:checked').value;
    console.log(selectedButton);
}

// getGroupSize: Gets the group size that the user entered
function getGroupSize(){
    // Default group size if one was not entered
    let defaultSize = 1;

    // Grab the user inputted value
    let userGroupSize = document.getElementById("groupSize").value;

    // If the size is <= 0, set the size to 1
    if(userGroupSize <= 0){
        userGroupSize = defaultSize;
    }

    console.log(userGroupSize);

    // Call setter function
}

// getHowHeard: gets how the user heard about the museum
function getHowHeard(){
    // Grab the value of the selected radio button
    let selectedButton = document.querySelector('input[type=radio][name=heardAbout]:checked').value;
    console.log(selectedButton);
}

// getIfMember: gets if the user selected yes or no
function getIfMember(){
    // Grab the value of the selected radio button
    let selectedButton = document.querySelector('input[type=radio][name=memberStatus]:checked').value;
    console.log(selectedButton);
}