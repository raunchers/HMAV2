package main

// Need to set up imports correctly
// Go mod init, etc...

import (
	"github.com/gin-gonic/gin"
)

// Struct to hold user inputted information
type guest struct {
	NAME      string `json:"name"`
	GENDER    string `json:"GENDER"`
	ZIP       string `json:"zip"`
	GROUPSIZE string `json:"groupsize"`
	ETHNICITY string `json:"ethnicity"`
	MEMBER    string `json:"member"`
	EMAIL     string `json:"EMAIL"`
	HEARD     string `json:"heard"`
}

func createGuest(c *gin.Context) {
	// Create a new guest struct
	var newGuest guest
}

func main() {
	router := gin.Default()
	router.Run("localhost:8080")
}
