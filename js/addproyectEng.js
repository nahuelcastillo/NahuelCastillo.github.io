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
        <div class="Poryectos" id="heeroDemo">
        <h2 class="text-center fs-1 text-light" id="tittle">Dungeon Heero Demo</h2>
        <div class="prueba text-center">
            <div class="row" id="deldsplay">
              <div class="col">
                <p class="text-light fs-5 text">Story mode game</p>
                <p class="text-light fs-5 text">game where you embody the life of a villager who returns to his town after years and sees that they have been attacked and robbed by evil beings,CAN YOU DEFEND HIM?</p>
                <P class="text-light">Game created with Unity and C#, sprite resources and images from the internet </P>
                <p class="text-light"> Download the demo of the game here <button style="margin: 3%"> <a class="abut" href="https://github.com/NahuelCastillo/DugeonHero_Demo" target="_blank"> <span>  Click aqui </span> </a></button></p>
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
            </div>
          </div>
          <hr class="text-light">
        <div>
        <h3 class="text-center text-light fs-2">Demo demonstrative</h3>
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
                <p class="text-light fs-5 text">Website for managing gyms</p>
                <p class="text-light fs-5 text">Web project created from scratch using Python (Flask), HTML, CSS, and JavaScript</p>
                <P class="text-light">This page was created to manage gyms from their creation or search within a stipulated environment</P>

                <div class="row">
                      <div class="col">
                      <a>Link to the code without Node.js</a>
                      <button style="margin: 3%"> <a class="abut" href="https://github.com/NahuelCastillo/MyGym" target="_blank"> <span>  Code </span> </a></button>
                      </div>
                      <div class="col">
                      <p class="text-light"> Page resource link, market analysis, SWOT analysis, presentation <button style="margin: 3%"> <a class="abut" href="https://drive.google.com/drive/folders/1Qo0Z3hl5tKtxepdUz0n-G0eRwjzSjkuS?usp=sharing" target="_blank"> <span> Click aqui </span> </a></button> </p>
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
          </div>
          <hr class="text-light">
        <div>
        <h3 class="text-center text-light fs-2">Demo demonstrative</h3>
        <div class="divcenter">
        <iframe class="object-fit-scale border rounded" autoplay src="https://drive.google.com/file/d/1Y17mL03VG8r1IlMGyMYF0m64wNY5hxUA/preview" width="720" height="480"></iframe>
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
                      <p class="text-light fs-5 text">Website to sell or buy products</p>
                      <p class="text-light fs-5 text">Web project created from scratch using node.js, HTML, CSS, Bootstrap and JavaScripts</p>
                      <P class="text-light">This page was created for buying or selling objects of any kind, in which APIs and a database were used</P>

                      <div class="row">
                      <div class="col">
                      <a>Link to the code without Node.js</a>
                      <button style="margin: 3%"> <a class="abut" href="https://github.com/nahuelcastillo/e-coomer" target="_blank"> <span>  Code </span></a></button>
                      </div>
                      <div class="col">
                      <a>Link to the code without Node.js</a>
                      <button style="margin: 3%"> <a class="abut" href="https://github.com/nahuelcastillo/e-comer_Node.js" target="_blank"> <span> More info </span> </a></button>  
                      </div>
                      </div>
                      <div>
                      <button style="margin: 3%"> <a class="abut" href="https://nahuelcastillo.github.io/e-coomer" target="_blank"> <span> Page </span> </a></button>  
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
                </div>
                <hr class="text-light">
              <div>
              <h3 class="text-center text-light fs-2">Demo demonstrative</h3>
              <div class="divcenter">
              <iframe class="object-fit-scale border rounded" autoplay src="https://drive.google.com/file/d/1jUbkJ-qFYrNOklLhyQatIgo14D_kEatx/preview" width="720" height="480"></iframe>
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


