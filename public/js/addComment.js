const addComment = async (e) => {
  // add comment
  e.preventDefault(); // prevent page reload

  const urlString = window.location.toString().split("/"); // get the url
  const postId = urlString[4]; // get the post id

  const contents = $("#comment").val().trim(); // get the contents

  if (contents) {
    // if the contents are not empty
    const response = await fetch(`/api/comment/${postId}`, {
      // post the comment
      method: "POST",
      body: JSON.stringify({ contents }),
      headers: { "Content-Type": "application/json" }, // set the headers
    });
    const data = await response.json(); // get the data from the response
    if (response.ok) {
      // if the response is ok
      alert("Comment Added");
      document.location.replace(`/post/${postId}`); //
    } else {
      alert("Oops, we have a problem. Your comment was not added.");
    }
  }
};

$("#add-comment").click(addComment); // add the event listener to the button
