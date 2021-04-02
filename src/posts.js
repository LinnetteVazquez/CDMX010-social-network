import { getData } from './lib/authScript.js';
import { editPost, addLike } from './lib/postFunctions.js';

let userIMG;
let userName;
let recipeTitle;
let vegetarian;
let description;
let recipeImageUrl;
let creatorUser;

async function getPostData() {
  await (getData((user) => {
    userIMG = user.photoURL;
    userName = user.displayName;
    creatorUser = user.uid;
  }));

  document.getElementById('isVegetarian').checked ? vegetarian = 'vegetarian' : vegetarian = 'not vegetarian';
  recipeTitle = document.getElementById('NewRecipeTitle').value;
  description = document.getElementById('newRecipeDescription').value;
}

async function createNewPost(e) {
  e.preventDefault();
  await (getPostData());

  firebase.firestore().collection('post').add({
    userID: creatorUser,
    user: userName,
    userPic: userIMG,
    title: recipeTitle,
    post: description,
    vegetal: vegetarian,
    image: recipeImageUrl,
  }).then(() => {
    window.location.hash = '#/';
  })
    .catch((error) => {
      alert('no se ha posiso publicar la receta :( )');
    });}

export const newPost = () => {
  const submitPost = document.getElementById('newRecipeButton');
  submitPost.addEventListener('click', createNewPost);
};

export const previewIMG = () => {
  const imgInput = document.getElementById('recipe-image');
  imgInput.addEventListener('change', () => {
    const preview = document.getElementById('imgRecipePreview');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      preview.src = reader.result;
      recipeImageUrl = reader.result;
    };

    reader.readAsDataURL(file);
  });
};

const deletePost = (id) => firebase.firestore().collection('post').doc(id).delete();

async function createPost(doc) {
  let actualUserID;

  await (getData((user) => {
    actualUserID = user.uid;
  }));

  let numberLikes;
  const likes = doc.data().likes;
  likes !== undefined ? numberLikes = likes.length : numberLikes = '0';
  const postContainer = document.getElementById('post-container');
  const creatorID = doc.data().userID;
  const getUserIMG = doc.data().userPic;
  const getUserName = doc.data().user;
  const getRecipeTitle = doc.data().title;
  const getRecipeDescription = doc.data().post;
  const getRecipeImg = doc.data().image;
  const itIsVegetarian = doc.data().vegetal;
  const recipeID = doc.id;

  const post = `
  <div class="recipe-template" data-id="${recipeID}">
     <div class="user-data">
     <img src="${getUserIMG}">
     <p>${getUserName}</p>
     <div class="iconos">
     ${creatorID === actualUserID ? `<p class="btn-edit"><i class="fas fa-pencil-alt"></i></p> 
     <p class="btn-delete"><i class="fas fa-trash-alt"></i></p>` : ''}
     </div>
  </div>
  <div class="recipe-face front">
  <figure>
    <img src="${getRecipeImg}">
    </figure>
    <div class="recipe-info">
    <div class="recipe-title"> <h3 id="recipeTitle"> ${getRecipeTitle} </h3> <span>${itIsVegetarian === 'vegetarian' ? `<i class="fas fa-leaf"></i>` : ''} </span> </div>
    <textarea id="recipeDescription" readonly>${getRecipeDescription}</textarea>
    </div>
    </div>
    <div class="edit-buttons"><button class="edit-recipe" id="saveChanges">Guardar cambios</button><button class="edit-recipe" id="cancelChanges">cancelar</button></div>
  <div class="bottom-icons"> <span class ="like"><i class="fas fa-heart" id="likebtn" style="${ likes ? (likes.includes(`${actualUserID}`) ? 'color:red' : '') : 'color:gray'}"></i>   ${numberLikes}</span> <span id="comment"><i class="far fa-comment"></i></span>   0 </div>
</div>
`;

  postContainer.innerHTML += post;

  const btnsDelete = document.querySelectorAll('.btn-delete');
  btnsDelete.forEach((elem) => {
    elem.addEventListener('click', async (e) => {
      await deletePost(e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'));
    });
  });

  const btnsEdit = document.querySelectorAll('.btn-edit');
  btnsEdit.forEach((elem) => {
    elem.addEventListener('click', async (e) => {
      await editPost(e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'));
    });
  });

  const likeBtn = document.querySelectorAll('.like');
  likeBtn.forEach((elem) => {
    elem.addEventListener('click', async (e) => {
      await addLike(e.target.parentElement.parentElement.parentElement.getAttribute('data-id'), actualUserID);
    });
  });
}

export const getPosts = () => {
  firebase.firestore().collection('post')
    .onSnapshot((snapshot) => {
      const changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type === 'added') {
          createPost(change.doc);
        } else if (change.type === 'modified') {
          const postContainer = document.getElementById('post-container');
          const post = postContainer.querySelector(`[data-id=${change.doc.id}]`);
          post.remove();
          createPost(change.doc);
        } else if (change.type === 'removed') {
          const postContainer = document.getElementById('post-container');
          const post = postContainer.querySelector(`[data-id=${change.doc.id}]`);
          post.remove();
        }
      });
    });
};

export const getLikedPosts = async () => {
  let actualUserID;

  await (getData((user) => {
    actualUserID = user.uid;
  }));

  firebase.firestore().collection('post').where('likes', 'array-contains', actualUserID)
    .onSnapshot((snapshot) => {
      const changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type === 'added') {
          createPost(change.doc);
        } else if (change.type === 'removed') {
          const postContainer = document.getElementById('post-container');
          const post = postContainer.querySelector(`[data-id=${change.doc.id}]`);
          post.remove();
        }
      });
    });
};

export const getUserPosts = async () => {
  let actualUserID;

  await (getData((user) => {
    actualUserID = user.uid;
  }));

  firebase.firestore().collection('post').where('userID', '==', actualUserID)
    .onSnapshot((snapshot) => {
      const changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type === 'added') {
          createPost(change.doc);
        } else if (change.type === 'removed') {
          const postContainer = document.getElementById('post-container');
          const post = postContainer.querySelector(`[data-id=${change.doc.id}]`);
          post.remove();
        }
      });
    });
};
