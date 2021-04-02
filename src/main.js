// Este es el punto de entrada de tu aplicacion
import { authPage, logInDOM } from './lib/authPages.js';
import {
  profilePage, newRecipePage, postsPage, mainPageContainer, signOutPage, likedPostsPage,
} from './lib/pages.js';
import {
  newPost, previewIMG, getPosts, getLikedPosts,
} from './posts.js';
import {
  authFunctions, hasUserAuth, logOut, getData,
} from './lib/authScript.js';
import { profileEdit } from './editProfile.js';

// page
const mainPage = document.getElementById('root');

// function que limpia la url
const clearPathname = (hash) => hash.replace('#/', '');

const routes = {
  home: () => {
    getPosts();
    mainPage.innerHTML = mainPageContainer;
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML = postsPage;
    getData((user) => {
      const userPhoto = document.getElementById('foto');
      const photo = user.photoURL;
      userPhoto.src = photo;
    });
  },

  login: () => {
    mainPage.innerHTML = authPage;
    logInDOM();
    authFunctions();
  },

  perfil: () => {
    mainPage.innerHTML = mainPageContainer;
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML = profilePage;
    profileEdit();
  },

  new: () => {
    mainPage.innerHTML = mainPageContainer;
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML = newRecipePage;
    previewIMG();
    newPost();
  },

  liked: () => {
    mainPage.innerHTML = mainPageContainer;
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML = likedPostsPage;
    getLikedPosts();
  },

  logout: () => {
    mainPage.innerHTML = mainPageContainer;
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML = signOutPage;
    logOut();
  },
};

// esta función se encarga del render
const renderPage = () => {
  hasUserAuth((isAuthenticated) => {
    let hashPath = '';
    if (!isAuthenticated) {
      hashPath = 'login';
      window.location.hash = '#/login';
    } else {
      hashPath = clearPathname(window.location.hash);
      if (!hashPath.length) {
        hashPath = 'home';
      }
    }
    const page = routes[hashPath];
    page();
  });
};
// cuando la ventana carga
window.onload = async () => {
  await renderPage();
};

// cuando navega
window.addEventListener('hashchange', async () => {
  await renderPage();
});
