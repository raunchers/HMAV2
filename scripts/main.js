// Guest: Will hold the user inputted information
class Guest{
    firstName;
    lastName;
    zipcode;
    groupSize;
    ethnicity;
    memberStatus;
    email;
    heardAbout;

    // Will set default values for all fields when instanced.
    // Setters will be called to change the information that the user enters
    constructor(){
        this.firstName = "John";
        this.lastName = "Smith";
        this.zipcode = "00000";
        this.groupSize = 0;
        this.ethnicity = "Unspecified";
        this.memberStatus = "No";
        this.email = "email@email.com";
        this.heardAbout = "Unspecified";
    }

    // Set the first and last name
    setFirstAndLast(first, last){
        this.firstName = first;
        this.lastName = last;
    }

    // Set the zip code
    setZipCode(zip){
        this.zipcode = zip;
    }

    // Set the group size
    setGroupSize(size){
        this.groupSize = size;
    }

    // Set the ethnicity
    setEthnicity(eth){
        this.ethnicity = eth;
    }

    // Set member status
    setMemberStatus(member){
        this.memberStatus = member;
    }

    // Set email address
    setMemberStatus(email){
        this.email = email;
    }

    // Set how the user heard about the museum
    setHeardAbout(heard){
        this.heardAbout = heard;
    }
}

