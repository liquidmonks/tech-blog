const logout = async (event) => {
  event.preventDefault(); // prevent refresh
  const response = await fetch("/api/logout", {
    // logout route
    method: "POST", // POST request
    headers: { "Content-Type": "application/json" }, // set header
  });

  if (response.ok) {
    // check if response is ok
    document.location.replace("/login"); // redirect to login page
  } else {
    alert("Uh-oh, something went wrong"); // show error message
  }
};

$("#logout").click(logout); // add click event listener to logout button
