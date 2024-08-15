package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// Struct to hold user inputted information
type guest struct {
	FIRSTNAME string `json:"firstname"`
	LASTNAME  string `json:"lastname"`
	GENDER    string `json:"gender"`
	ZIP       string `json:"zip"`
	GROUPSIZE string `json:"groupsize"`
	ETHNICITY string `json:"ethnicity"`
	MEMBER    string `json:"member"`
	EMAIL     string `json:"email"`
	HEARD     string `json:"heard"`
}

// Slice of guest structs, will act as a database for now
var guests = []guest{
	{FIRSTNAME: "Michael", LASTNAME: "Ethridge", GENDER: "male", ZIP: "28658", GROUPSIZE: "1", ETHNICITY: "white", MEMBER: "N", EMAIL: "email@email.com", HEARD: "other"},
	{FIRSTNAME: "unspecified", LASTNAME: "unspecified", GENDER: "unspecified", ZIP: "unspecified", GROUPSIZE: "1", ETHNICITY: "unspecified", MEMBER: "N", EMAIL: "email@email.com", HEARD: "unspecified"},
}

// createGuest: Creates a new guest struct with user inputted values
func createGuest(c *gin.Context) {
	// Create a new guest struct
	var newGuest guest

	// If no error, JSON is bound to the newGuest struct
	// Currently just returning when an error is found
	if err := c.BindJSON(&newGuest); err != nil {
		return
	}

	// Append to the slice of guests
	guests = append(guests, newGuest)
	// Return the guest just created with status message "Created"
	c.IndentedJSON(http.StatusCreated, newGuest)
}

// getGuest: Handles route for getting guest structs. Returns JSON version of all guest structs
func getGuest(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, guests)
}

func main() {
	router := gin.Default()

	// Configure CORS
	// Allows all origins
	router.Use(cors.Default())

	// Getters
	router.GET("/guests", getGuest)

	// Setters
	router.POST("/guests", createGuest)

	router.Run("localhost:8080")
}
