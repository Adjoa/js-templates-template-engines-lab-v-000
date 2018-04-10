function createPost() {
  var postContent = document.getElementById("postContent").value;
  var postAuthor = document.getElementById("postAuthor").value;

  var postTemplate = document.getElementById("post-template").innerHTML;

  //create template function
  var templateFn = _.template(postTemplate);

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({content: 'postContent', author: 'postAuthor'});

  var commentsDiv = document.getElementById("comments");
  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
