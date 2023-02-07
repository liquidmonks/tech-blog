const loginHandler = async (e) => {
  e.preventDefault();
  const user_name = $("#user-name").val().trim(); // get user name
  const password = $("#password").val().trim(); // get password

  if (user_name == "") {
    // check if user name is empty
    $("#user-name").attr("style", "background-color: rgb(255, 245, 235); border-color: red; ");
    $("#user-name").attr("placeholder", "Please enter a username");
  }

  if (password == "") {
    // check if password is empty
    $("#password").attr("style", "background-color: rgb(255, 245, 235); border-color: red; ");
    $("#password").attr("placeholder", "Please enter a password");
  }

  if (user_name && password) {
    // check if user name and password are not empty
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ user_name, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json(); // get data from response
    if (response.status === 400 || response.status === 401) {
      return alert(data.message);
    }
    document.location.replace("/"); // redirect to home page
  }
};

$("#login-btn").click(loginHandler); // add event listener to login button
