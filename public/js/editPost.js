const editPost = async (e) => {
  // edit post
  e.preventDefault(); // prevent default action
  const urlString = window.location.toString().split("/"); //getting the url
  const postId = urlString[4]; // getting the post id

  const contents = $("#content-textarea").val(); // getting the contents of the textarea
  const title = $("#title-input").val(); // getting the title of the post

  const response = await fetch(`/api/post/${postId}`, {
    // sending the post data to the server
    method: "PUT", // setting the method to PUT
    body: JSON.stringify({ title, contents }), // sending the contents of the textarea to the server
    headers: { "Content-Type": "application/json" }, // setting the headers of the request
  });

  if (response.ok) {
    alert("Post Updated");
    document.location.replace("/dashboard"); // redirecting to the dashboard
  } else {
    alert("Oops, we have a problem. Your post was not updated"); // alerting the error
  }
};

$("#update-post").click(editPost); // adding the click event to the update post button
