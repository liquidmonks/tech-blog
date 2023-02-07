const deletePost = async (e) => {
  e.preventDefault(); // prevent default action
  const urlString = window.location.toString().split("/"); // get the url
  const postId = urlString[4]; // get the id

  const response = await fetch(`/api/post/${postId}`, {
    // post request
    method: "DELETE", // set the method to delete
  });

  const data = await response.json(); // get the data from the response
  if (response.ok) {
    alert("Post Deleted");
    document.location.replace("/dashboard"); // redirect to the dashboard
  } else {
    alert("Something went wrong. Can't delete post"); // if the response is not ok
  }
};

$("#delete-post").click(deletePost); // add the event listener to the button
