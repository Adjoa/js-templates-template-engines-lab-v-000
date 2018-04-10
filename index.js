function createPost() {
  var postContent = document.getElementById("postContent").value;
  var postAuthor = document.getElementById("postAuthor").value;

  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);
  var postTemplateHTML = postTemplateFn({content: 'postContent', author: 'postAuthor'});
  var postFromTemplate = postTemplateHTML.innerHTML

  var pageTemplate = document.getElementById("page-template").innerHTML;
  var pageTemplateFn = _.template(pageTemplate);
  var pageTemplateHTML = pageTemplateFn({post: 'postTemplateHTML'});


  var pageDiv = document.getElementById("page");
  pageDiv.innerHTML += pageTemplateHTML;
}
