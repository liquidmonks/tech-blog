const addPost = async (e) => {
  // add post
  e.preventDefault(); // prevent default action

  const contents = $("#modal-content-textarea").val(); // get the contents of the textarea
  const title = $("#modal-title-input").val().trim(); // get the contents of the textarea
  if (contents && title) {
    const response = await fetch(`/api/post`, {
      // post the contents of the textarea
      method: "POST",
      body: JSON.stringify({ title, contents }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json(); // get the contents of the response

    if (response.ok) {
      // if the response is ok
      alert(data.message);
      document.location.replace("/dashboard"); // redirect to the dashboard
    } else {
      alert("Oops, we have a problem. Your post was not successful"); // if the response is not ok
    }
  }
};

$("#add-post").click(addPost); // add the click event to the add post button
