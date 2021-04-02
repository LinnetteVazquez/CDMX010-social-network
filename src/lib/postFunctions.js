export const editPost = (id) => {
  const recipes = document.getElementById('post-container');
  const post = recipes.querySelector(`[data-id=${id}]`);

  const editedTitle = post.querySelector('[id=recipeTitle]');
  const editedDescription = post.querySelector('[id=recipeDescription]');
  post.querySelector('.recipe-template .edit-buttons').style.display = 'block';

  editedTitle.contentEditable = true; editedTitle.style.border = '1.5px solid black';
  editedDescription.removeAttribute('readonly'); editedDescription.style.border = '1.5px solid black';

  const saveNewDataBtn = post.querySelector('[id=saveChanges]');
  saveNewDataBtn.addEventListener('click', () => {
    const editedTitleValue = post.getElementsByTagName('h3')[0].innerHTML;
    const editedDescriptionValue = editedDescription.value;

    firebase.firestore().collection('post').doc(id)
      .update({
        title: editedTitleValue,
        post: editedDescriptionValue,
      });
  });

  const cancel = post.querySelector('[id=cancelChanges]');
  cancel.addEventListener('click', () => {
    editedTitle.contentEditable = false; editedTitle.style.border = 'none';
    editedDescription.readOnly = true; editedDescription.style.border = 'none';
    post.querySelector('.recipe-template .edit-buttons').style.display = 'none';
  });
};

export const addLike = (postID, user) => {
  const thisPost = firebase.firestore().collection('post').doc(postID);

  thisPost.get()
    .then((doc) => {
      const postLikes = doc.data().likes;
      console.log(postLikes);
      if (postLikes === undefined) {
        thisPost.update({
          likes: firebase.firestore.FieldValue.arrayUnion(user),
        });
      } else if (postLikes.includes(user)) {
        thisPost.update({
          likes: firebase.firestore.FieldValue.arrayRemove(user),
        });
      } else {
        thisPost.update({
          likes: firebase.firestore.FieldValue.arrayUnion(user),
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
