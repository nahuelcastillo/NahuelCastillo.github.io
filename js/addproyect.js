const div = document.getElementById("container");
const bttp = document.getElementById("Pyectdung");
const bttm = document.getElementById("Pyectmygym");
const btte = document.getElementById("Pyectecomer");
const bttc = document.getElementById("contact");

window.onload = function(){
    /*Agrega todo lo del proyecto hero*/ 
    if(bttp){
        bttp.addEventListener("click", function(){
        let elementos = document.getElementById("container").getElementsByTagName("div")
           
        if(elementos.length > 0){
            elementos[elementos.length-1].remove()
        }
        div.innerHTML = ` 
        <div class="Projects" id="heroDemo">
        <h2 class="text-center fs-1 text-light" id="tittle">Demo de Dungeon Heero</h2>
        <div class="prueba text-center">
        <div class="row" id="display">
            <div class="col">
                <p class="text-light fs-5 text">Juego con modo historia</p>
                <p class="text-light fs-5 text">Juego en el que encarnas la vida de un aldeano que regresa a su pueblo después de años y descubre que ha sido atacado y saqueado por seres malvados, ¿PODRÁS DEFENDERLO?</p>
                <p class="text-light">Juego creado con Unity y C#, recursos de sprites e imágenes obtenidos de internet</p>
                <p class="text-light">Descarga la demo del juego aquí <button style="margin: 3%"><a class="abut" href="https://github.com/NahuelCastillo/DugeonHero_Demo" target="_blank"><span>Click aquí</span></a></button></p>
            </div>
            <div class="col">
                <div id="carouselExampleSlidesOnly4" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/Img/Proyectos/hero1.png" class="d-block w-100" alt="...">
                </div>
              <div class="carousel-item">
                  <img src="/Img/Proyectos/hero2.png" class="d-block w-100" alt="...">
                </div>
              <div class="carousel-item">
                <img src="/Img/Proyectos/hero3.png" class="d-block w-100" alt="...">
                 </div>
                </div>
            </div>
        </div>
          </div>
        <hr class="text-light">
         <div>
        <h3 class="text-center text-light fs-2">Demostración de la demo</h3>
        <div class="divcenter">
            <iframe class="object-fit-scale border rounded" autoplay src="https://drive.google.com/file/d/1NEYb4Zm1AikODpWFh9saFBZB8GaYgjpL/preview" width="720" height="480"></iframe>
        </div>
         </div>
        </div>
        `
        var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleSlidesOnly4'), {
          interval: 2000
        });

        const target = document.getElementById('tittle');
        // Desplazamos la vista hasta el elemento objetivo
        target.scrollIntoView({ behavior: 'smooth' });

        })}
        
    /*Agrega todo lo del proyecto mygym*/ 
    if(bttm){
    bttm.addEventListener("click", function(){
         let elementos = document.getElementById("container").getElementsByTagName("div")
           
        if(elementos.length > 0){
             elementos[elementos.length-1].remove()
         }
        div.innerHTML = ` 
        <div class="Poryectos"  id="mygymbackgrou">
        <h2 class="text-center fs-1 text-light" id="tittle">MyGym</h2>
          <div class="prueba text-center">
            <div class="row" id="deldsplay">
              <div class="col">
              <p class="text-light fs-5 text">Sitio web para la gestión de gimnasios</p>
              <p class="text-light fs-5 text">Proyecto web creado desde cero utilizando Python (Flask), HTML, CSS y JavaScript</p>
              <p class="text-light">Esta página fue creada para gestionar gimnasios desde su creación o búsqueda dentro de un entorno estipulado</p>
              
              <div class="row">
                  <div class="col">
                      <a>Enlace al código</a>
                      <button style="margin: 3%"><a class="abut" href="https://github.com/NahuelCastillo/MyGym" target="_blank"><span>Código</span></a></button>
                  </div>
                  <div class="col">
                      <p class="text-light">Enlace a recursos de la página, análisis de mercado, análisis SWOT, presentación <button style="margin: 3%"><a class="abut" href="https://drive.google.com/drive/folders/1Qo0Z3hl5tKtxepdUz0n-G0eRwjzSjkuS?usp=sharing" target="_blank"><span>Click aquí</span></a></button></p>
                  </div>
              </div> 
              </div>
              <div class="col">
                <div id="carouselExampleSlidesOnly4" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="/Img/Proyectos/mygym1.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="/Img/Proyectos/mygym2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="/Img/Proyectos/mygym3.png" class="d-block w-100" alt="...">
                    </div>
                   </div>
                  </div>
              </div>
          </div>
          <hr class="text-light">
        <div>
        <h3 class="text-center text-light fs-2">Desmostracion de la demo</h3>
        <div class="divcenter">
        <iframe class="object-fit-scale border rounded" autoplay src="https://drive.google.com/file/d/1Y17mL03VG8r1IlMGyMYF0m64wNY5hxUA/preview" width="720" height="480"></iframe>
        </div>
        </div>
        </div>
        </div>

        `
        var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleSlidesOnly4'), {
          interval: 2000
        });

        const target = document.getElementById('tittle');
        // Desplazamos la vista hasta el elemento objetivo
        target.scrollIntoView({ behavior: 'smooth' });
        });}


        /*Esto es para crear todo del e-comer */
        if(btte){
          btte.addEventListener("click", function(){
               let elementos = document.getElementById("container").getElementsByTagName("div")
                 
              if(elementos.length > 0){
                   elementos[elementos.length-1].remove()
               }
              div.innerHTML = ` 
            <div class="Poryectos">
              <h2 class="text-center fs-1 text-light" id="tittle">E-mercado</h2>
              <div class="prueba text-center">
                  <div class="row" id="deldsplay">
                  <div class="col">
                  <p class="text-light fs-5 text">Sitio web para comprar o vender productos</p>
                  <p class="text-light fs-5 text">Proyecto web creado desde cero utilizando node.js, HTML, CSS, Bootstrap y JavaScript</p>
                  <p class="text-light">Esta página fue creada para comprar o vender objetos de cualquier tipo, en la cual se utilizaron APIs y una base de datos</p>
              
                  <div class="row">
                      <div class="col">
                          <a>Enlace al código sin Node.js</a>
                          <button style="margin: 3%"><a class="abut" href="https://github.com/nahuelcastillo/e-coomer" target="_blank"><span>Código</span></a></button>
                      </div>
                      <div class="col">
                          <a>Enlace al código con Node.js</a>
                          <button style="margin: 3%"><a class="abut" href="https://github.com/nahuelcastillo/e-comer_Node.js" target="_blank"><span>Más información</span></a></button>
                      </div>
                  </div>
                  <div>
                      <button style="margin: 3%"><a class="abut" href="https://nahuelcastillo.github.io/e-coomer" target="_blank"><span>Página</span></a></button>
                  </div>
              </div>
                    <div class="col">
                      <div id="carouselExampleSlidesOnly4" class="carousel slide" data-bs-ride="carousel">
                          <div class="carousel-inner">
                          <div class="carousel-item active">
                           <img src="Img/Proyectos/e-mercado1.png" class="d-block w-100" alt="...">
                           </div>
                          <div class="carousel-item">
                           <img src="Img/Proyectos/e-mercado2.png" class="d-block w-100" alt="...">
                           </div>
                          <div class="carousel-item">
                           <img src="Img/Proyectos/e-mercado3.png" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                           <img src="Img/Proyectos/e-mercado4.png" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                           <img src="Img/Proyectos/e-mercado4.png" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                           <img src="Img/Proyectos/e-mercado5.png" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                           <img src="Img/Proyectos/e-mercado6.png" class="d-block w-100" alt="...">
                          </div>
                         </div>
                        </div>
                    </div>
                  </div>

                <hr class="text-light">
              <div>
              <h3 class="text-center text-light fs-2">Demo demonstrative</h3>
              <div class="divcenter">
              <iframe class="object-fit-scale border rounded" autoplay src="https://drive.google.com/file/d/1jUbkJ-qFYrNOklLhyQatIgo14D_kEatx/preview" width="720" height="480"></iframe>
              </div>
              </div>
              </div>
              </div>`
              var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleSlidesOnly4'), {
                interval: 2000
              });
              const target = document.getElementById('tittle');
                // Desplazamos la vista hasta el elemento objetivo
               target.scrollIntoView({ behavior: 'smooth' });
              });}




              



    /*Esto es para soltar el campo de contac */

        if(bttc){
        bttc.addEventListener("click", function(){
        div.innerHTML = `
        <div class="containerr">
        <h1>Contact Me</h1>
        <form target="_blank" action="https://formsubmit.co/nahuel.castillo44@gmail.com" method="POST">
        <div class="form-group">
        <div class="form-row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Full Name" required>
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Email Address" required>
        </div>
        </div>
        </div>
        <div class="form-group">
        <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
        </div>
        <div id="btt">
        <button type="submit" > <span>Submit Form  </span> </button>
        </div>
        </form>
        </div>
        ` 
    })}



}


