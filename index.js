function postComment() {
  event.preventDefault();
  const commenter = document.querySelector("#commenterName").value;
  const comment = document.querySelector("#commentText").value;
  const commentTemplate = document.querySelector("#comment-template").innerHTML;

  const templateFn = _.template(commentTemplate);
  const commentsDiv = document.querySelector("#comments");

  const templateHTML = templateFn({ comment: comment, commenter: commenter });

  commentsDiv.innerHTML += templateHTML;
}
