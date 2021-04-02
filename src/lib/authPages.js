export const authPage = `
<div class="container" id="container">
 <div class="form-container sign-up-container">
    <form action="#" name="signUpForm" id="signUpForm">
        <h1>Crear cuenta</h1>
            <p class="error-message-already-user" id="already-user">Este email ya está registrado!</p>
            <p class="verification" id="verification">Gracias por registrarte! Verifica tu email para iniciar sesión</p>
        <span>usa tu email para registrarte</span>
        <input type="text" name="signUpName" placeholder="Nombre" required>
        <input type="email" name= "signUpEmail" placeholder="Email" required>
        <input type="password" name= "signUpPassword" placeholder="Password" required>
        <button type="submit" href="#/">Crear cuenta</button>
        <br>
        <br>
        <button id="sign-in-mobile">Iniciar sesiòn</button>
    </form>
 </div>
 <div class="form-container sign-in-container">
    <form action="#" name="logInForm" id="signInForm" >
     <h1>Iniciar sesión</h1>
    <div class="social-container" id="social-container">
        <img id= "logInFacebook" src="https://cdn.icon-icons.com/icons2/642/PNG/512/facebook_icon-icons.com_59205.png">
        <img id="logInGoogle" src="https://cdn.worldvectorlogo.com/logos/google-icon.svg">
        <img id="logInGithub" src="https://image.flaticon.com/icons/png/512/25/25231.png">
    </div>
            <p class="error-message-verification" id="error-verification">Verifica tu email antes de iniciar sesión</p>
            <p class="error-message-not-found" id="user-not-found">El email o contraseña ingresados no son correctos</p>
 
    <span>o usa tu cuenta</span>
    <input type="email"name="logInEmail" placeholder="Email" required>
    <input type="password" placeholder="Password" name="logInPassword" required>
    <button type="submit" href="#/">Ingresar</button>
    <br>
    <br>
    <button id="sign-up-mobile" href="#/">Crear cuenta</button>
  </form>
 </div>
 <div class="overlay-container">
    <div class="overlay">
        <div class="overlay-panel overlay-left">
         <img src="https://user-images.githubusercontent.com/66543426/108759709-515f6700-7512-11eb-95fa-03b759694a1a.png">
                  <br>
                  <br>
            <h1>¡Aprende, cocina y comparte!</h1>
            <p>Únete a nuestra comunidad y comparte tus mejores recetas</p>
            <button class="chage" id="signIn">Iniciar sesiòn</button>
        </div>
        <div class="overlay-panel overlay-right">
         <img src="https://user-images.githubusercontent.com/66543426/108759709-515f6700-7512-11eb-95fa-03b759694a1a.png">
                  <br>
                  <br>
            <h1>¡Aprende, cocina y comparte!</h1>
            <p>Bienvenido, sigue compartiendo tus receta.</p>
            <button class="chage" id="signUp">Crear cuenta</button>
        </div> 
    </div>
  </div>
</div>
  `;

export const logInDOM = () => {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');
  const signUpMobile = document.getElementById('sign-up-mobile');
  const signInMobile = document.getElementById('sign-in-mobile');

  signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
  });
  signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
  });
  signUpMobile.addEventListener('click', () => {
    container.classList.add('right-panel-active');
  });
  signInMobile.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
  });
};
