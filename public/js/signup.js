const signUpHandler = async (e) => {
  e.preventDefault(); // prevent default action
  const user_name = $("#signup-username").val().trim(); // get username
  const password = $("#signup-password").val().trim(); // get password

  if (user_name == "") {
    // if username is empty
    $("#signup-username").attr("style", "border-color: red;"); // change border color to red
    $("#signup-username").attr("placeholder", "Please enter a username"); // change placeholder text
  }

  if (password.length < 8) {
    // if password is less than 8 characters
    $("#signup-password").attr("style", "border-color: red;"); // change border color to red
    $("#signup-password").attr("placeholder", "Please enter a valid password"); // change placeholder text
    return; // exit function
  }

  if (user_name && password) {
    // if username and password are not empty
    const response = await fetch("/api/signup", {
      // send request to server
      method: "POST", // set method to POST
      body: JSON.stringify({ user_name, password }), // set body as JSON
      headers: { "Content-Type": "application/json" }, // set headers
    });

    const signData = await response.json(); // get data from server
    if (response.status === 400 || response.status === 404) {
      // if server responds with error
      return alert(signData.message); // display error message
    }
    if (response.ok) {
      // if server responds with success
      document.location.replace("/"); // redirect to homepage
    } else {
      return alert("Username already exist in our database. Try another Username."); // display error message
    }
  }
};
$("#signup-btn").click(signUpHandler); // add event listener to signup button
