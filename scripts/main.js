// import fetch from "node-fetch"

// Default value for when the user did not enter one
const UNSPECIFIED = "unspecified";

// File names for each html page
const INDEX = "../index.html";
const FIRSTANDLAST = "../HMAV2/pages/firstLastName.html";
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
            getName();
            location.href = GENDER;
            break;
        case UGENDER:
            getGender();
            location.href = ZIP;
            break;
        case ZIPCODE:
            getZip();
            location.href = GROUPSIZE;
            break;
        case SGROUP:
            getGroupSize();
            location.href = ETHNICITY;
            break;
        case ETH:
            getEthnicity();
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
                getIfMember();
                // If yes, commit
                console.log("Commit to DB");
                break;
            }
        case EMAILAD:
            getEmail();
            location.href = HEARD;
            break;
        case HOWHEARD:
            getHowHeard();
            // Commit to DB
            commitGuestInfo("Firstname", "Lastname", "male", "11111", "1", "white", "N", UNSPECIFIED, UNSPECIFIED)
            .then(() => getData());
            break;
    }// End switch statement
}

// handles the back button click
// May need some additional logic when going back to the INDEX page, have the session data cleared.
function clickedBack(){
    // Grab the current pages title
    let currentPage = document.title;

    // If clicking the back button goes to the index page
    // Clear the sessionStorage data
    if(currentPage === FLNAME){
        sessionStorage.clear();
    }

    // Loads the previous page
    window.history.back();
}

// getName: gets the name that the user entered
function getName(){

    // Grab the first and last names
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    // If there is a first name but not a last name.
    if(firstName && !lastName){
        lastName = UNSPECIFIED;
        sessionStorage.setItem("firstName", firstName);
        sessionStorage.setItem("lastName", lastName);
        return
    }

    // If there is a last name but not a first name.
    if(!firstName && lastName){
        firstName = UNSPECIFIED;
        sessionStorage.setItem("firstName", firstName);
        sessionStorage.setItem("lastName", lastName);
        return
    }

    // If there is not a value for first or last name, set default values
    if(!firstName || !lastName){
        firstName = UNSPECIFIED;
        lastName = UNSPECIFIED;
        sessionStorage.setItem("firstName", firstName);
        sessionStorage.setItem("lastName", lastName);
        return
    }

    // If both name fields have entries
    sessionStorage.setItem("firstName", firstName);
    sessionStorage.setItem("lastName", lastName);
}

// getGender: gets which gender the user selected
function getGender(){
    // Grab the value of the selected radio button
    let selectedButton = document.querySelector('input[type=radio][name=gender]:checked').value;
    sessionStorage.setItem("gender", selectedButton);
}

// getZip: gets the zip code that the user entered
function getZip(){
    // Grab the zip 
    let userZip = document.getElementById("zipCode").value;

    /* 
        Need to have the page not redirect to the next question when the length of the zip code is too long
        Need to stay on the same page and wait for the user to enter a valid zip code
        Could have the function return the zip code and if there was an error
        Check for no error in the page redirect function
    */
   if(userZip.length > 5){
        alert("The zip code has too many digits, please enter a valid zip code.");
        return
   }

    // If no zip code was entered, use the default value
    if(!userZip){
        userZip = UNSPECIFIED;
        sessionStorage.setItem("userZip", userZip);
        return
    }

    sessionStorage.setItem("userZip", userZip);
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

    sessionStorage.setItem("groupSize", userGroupSize);

    // Call setter function
}

// getEthnicity: gets the ethnicity that the user selected
function getEthnicity(){
    // Grab the value of the selected radio button
    let selectedButton = document.querySelector('input[type=radio][name=ethnicity]:checked').value;
    sessionStorage.setItem("ethnicity", selectedButton);
}

// getIfMember: gets if the user selected yes or no
function getIfMember(){
    // Grab the value of the selected radio button
    let selectedButton = document.querySelector('input[type=radio][name=memberStatus]:checked').value;
    sessionStorage.setItem("memberStatus", selectedButton);
    // If the user is already a member, put the default values in for email and how they heard about the museum
    if(selectedButton === "Y"){
        sessionStorage.setItem("userEmail", UNSPECIFIED);
        sessionStorage.setItem("heardAbout", UNSPECIFIED);
    }
    // Return if the user selected Yes or No
    return selectedButton
}

// getEmail: gets the email address that the user entered
function getEmail(){
    // Grab the email 
    let userEmail = document.getElementById("userEmail").value;

    // If no email was entered
    if(!userEmail){
        userEmail = UNSPECIFIED;
        sessionStorage.setItem("userEmail", userEmail);
        return
    }

    sessionStorage.setItem("userEmail", userEmail);
}

// getHowHeard: gets how the user heard about the museum
function getHowHeard(){
    // Grab the value of the selected radio button
    let selectedButton = document.querySelector('input[type=radio][name=heardAbout]:checked').value;
    sessionStorage.setItem("heardAbout", selectedButton);
}

// getData gatehrs all currently saved guests data
async function getData(){
    // Return a promise that contains a response from the API URL accessed
    // Contains the data(JSON)
    const results = await fetch("http://localhost:8080/guests")
        .then((data) => data.json())
        .then((data) => data);
    
    for(const result of results){
        console.log(result);
    }
}

// collectUserData will collect the data from sessionStorage to pass it to commitGuestInfo
function collectUserData(){

}

// commitGuestInfo commits the user inputted info to the DB
async function commitGuestInfo(firstname, lastname, gender, zip, groupSize, ethnicity, member, email, heard){
    const data = {
        firstname, 
        lastname, 
        gender, 
        zip, 
        groupSize, 
        ethnicity, 
        member, 
        email, 
        heard
    };

    // Send as the request body to the API end point
    const result = await fetch("http://localhost:8080/guests", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })
    .then((data) => data.json())
    .then((data) => data);
}

/* 
    1. Set up routes for creating a guest
    2. Set up data being handed from JS to GO
*/