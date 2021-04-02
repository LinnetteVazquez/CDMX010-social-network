export const profilePage = `
<div class="profile">
<div class="profile-page">
<p class="btn-edit" id="editProfile"><i class="fas fa-pencil-alt"></i></p> 
  <div class="profile-info">
    <div class="picture-container">
        <img src="https://www.nailseatowncouncil.gov.uk/wp-content/uploads/blank-profile-picture-973460_1280.jpg" id="profilePicture">
    </div>
    <div class="user-data-p">
        <h1 id="nombre">nombre</h1>
        <p id="correo">correo</p>
       <textarea name="descripcion" id="descriptionProfile" readonly></textarea>
       <div class="edit-buttons"><button class="edit-recipe" id="saveChanges">Guardar cambios</button><button class="edit-recipe" id="cancelChanges">cancelar</button></div>
    </div>
  </div>
</div>
<div class="post-container" id="my-post-container"></div>
</div>
`;

export const newRecipePage = `
<div class= "new-recipe-container">
  <h1 class="new-recipe-title"> Nueva receta </h1> 
  <br>
  <img src="" id="imgRecipePreview" class="img-preview-recipe">
    <form action="#" name="newRecipeForm" class= "new-recipe-form">
      <label for="imageFile">Selecciona la imagen de tu receta</label>
      <input type="file" id="recipe-image" accept="image/*" required>
      <label for="newRecipeTitle">Escribe el título de la receta</label>
      <input type="text" name="newRecipeTitle" id="NewRecipeTitle" placeholder= "Ej. Buñuelos" required>
      <label for="newRecipeDescription">Descripción de tu receta</label>
      <textarea maxlength="250" name= "newRecipeDescription" id= "newRecipeDescription" placeholder= "describe brevemente tu receta" required></textarea>
      <label class="vegetarian"><input type="checkbox" id="isVegetarian" class="vegetarian"> Mi receta es vegetariana</label>
      <button id="newRecipeButton">Subir receta</button>
    </form>
</div>
`;

export const postsPage = `
<section class="home section">
    <div class="post-page-container" id="home-usuario">
        <div class="encabezado">
            <div id="search" class="buscar post">
                <span>Busca la receta que deseas</span>
                <i class="fas fa-search"></i>
                <input type="text" name="buscar" placeholder="Buscar">
            </div>
            <div class="img">
                <img src=https://www.softzone.es/app/uploads/2018/04/guest.png alt="" class="foto perfil" id="foto">
            </div>
        </div>
        <div id="post-container"></div>
    </div>
</section>
`;

export const likedPostsPage = `
<section class="home section">
    <div class="post-page-container" id="home-usuario">
        <div class="encabezado">
            <div id="search" class="buscar post">
                <span>Busca la receta que deseas</span>
                <i class="fas fa-search"></i>
                <input type="text" name="buscar" placeholder="Buscar">
            </div>
            <div class="img">
                <img src=https://www.softzone.es/app/uploads/2018/04/guest.png alt="" class="foto perfil" id="foto">
            </div>
        </div>
        <div id="post-container"></div>
    </div>
</section>
`;

export const mainPageContainer = `
<div class="main-page">
     <header> 
      <div class="logo">
          <img src="https://user-images.githubusercontent.com/66543426/108759709-515f6700-7512-11eb-95fa-03b759694a1a.png">
      </div>

      <nav class="nav-header">
        
          <label for="toggle" class="toggle-btn">
      <span></span>
      <span></span>
      <span></span>    
     </label> 
      <input type="checkbox" id="toggle">
        
        <div class="nav-info">
<ul class="nav" id="navegador">
          <li>
            <a href="#/" class="active"><i class="fa fa-home"></i>   Inicio</a>
          </li>
          <li>
            <a href="#/perfil"><i class="fas fa-user"></i>   Perfil</a>
          </li>
          <li>
            <a href="#/new"><i class="far fa-plus-square"></i>   Agregar receta</a>
          </li>
          <li>
            <a href="#/liked"><i class="fas fa-heart"></i>   Mis recetas favoritas</a>
          </li>
          <li>
            <a href="#/logout"><i class="fas fa-sign-out-alt"></i>   Salir</a>
          </li>
        </ul>
        </div>
      </nav>  
</header>

<div id="pageContainer" class="post-container"></div>
</div>
`;

export const signOutPage = `
<div class="sign-out-page">
    <figure class="app-icon">
        <img src="https://user-images.githubusercontent.com/66543426/108759709-515f6700-7512-11eb-95fa-03b759694a1a.png" alt="">
    </figure>
    <p>¿Seguro que quieres salir?</p>
  <div class="log-out-bts">
  <button id="logOutButton"> Salir </button>
  <button id="stayButton"> cancelar </button>
  </div>
</div>
`;
