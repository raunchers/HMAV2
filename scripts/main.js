// Default value for when the user did not enter one
const UNSPECIFIED = "unspecified";

// File names for each html page
const INDEX = "../index.html";
const FIRSTANDLAST = "../HMAV2/pages/firstLastName.html";
// Used for the back button click on the gender page
const BACKFIRSTANDLAST = "../pages/firstLastName.html"
const GENDER = "../pages/gender.html";
const ZIP = "../pages/zipcode.html";
const GROUPSIZE = "../pages/groupSize.html";
const ETHNICITY = "../pages/ethnicity.html";
const MEMBER = "../pages/memberStatus.html";
const EMAIL = "../pages/emailAddress.html";
const HEARD = "../pages/howHear.html";

// All page titles, will be used to help redirect the user based on current page
const INDEXPAGE = "Welcome";
const FLNAME = "First and Last Name";
const UGENDER = "Gender";
const ZIPCODE = "Zip Code";
const SGROUP = "Group Size";
const ETH = "Ethnicity";
const MEMBERSTATUS = "Member Status";
const EMAILAD = "Email Adress";
const HOWHEARD = "Heard About";

// handles the next button click
// Will redirect to the next page based on the current page
function clickedNext(){
    // Grab the current pages title
    let currentPage = document.title;
    
    // Use the current pages title to redirect to the next page
    switch(currentPage){
        case INDEXPAGE:
            location.href = FIRSTANDLAST;
            break;
        case FLNAME:
            location.href = GENDER;
            break;
        case UGENDER:
            location.href = ZIP;
            break;
        case ZIPCODE:
            location.href = GROUPSIZE;
            break;
        case SGROUP:
            location.href = ETHNICITY;
            break;
        case ETH:
            location.href = MEMBER;
            break;
        case MEMBERSTATUS:
            // Grab the answer from the user
            let yesOrNo = getIfMember();

            // If no, route to email page
            if(yesOrNo === "N"){
                // Redirect to email
                location.href = EMAIL;
            }else{
                // If yes, commit
                console.log("Selected yes.")
                break;
            }
        case EMAILAD:
            location.href = HEARD;
            break;
        case HOWHEARD:
            // Call function to get user selection
            console.log("Called switch statement for commit");
            break;
    }// End switch statement
}

// handles the previous button click
// Redirects to the previous page based on the current page
function clickedBack(){
    // Grab the current pages title
    let currentPage = document.title;
    
    // Use the current pages title to redirect to the next page
    switch(currentPage){
        case FLNAME:
            location.href = INDEX;
            break;
        case UGENDER:
            location.href = BACKFIRSTANDLAST;
            break;
        case ZIPCODE:
            location.href = GENDER;
            break;
        case SGROUP:
            location.href = ZIP;
            break;
        case ETH:
            location.href = GROUPSIZE;
            break;
        case MEMBERSTATUS:
            location.href = ETHNICITY;
            break;
        case EMAILAD:
            location.href = MEMBER;
            break;
        case HOWHEARD:
            location.href = EMAIL;
            break;
    }// End switch statement
}

// changePage: Will have the current page title passed to it
// Will redirect the user to the correct page based off of what the page title is
function changePage(){
    
}

// getName: gets the name that the user entered
function getName(){

    // Next page
    let nextPage = GENDER;

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
    return selectedButton;
}