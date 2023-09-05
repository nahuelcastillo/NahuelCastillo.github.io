const div = document.getElementById("container");
const bttp = document.getElementById("Pyectdung");
const bttm = document.getElementById("Pyectmygym");
const bttc = document.getElementById("contact");

window.onload = function(){
    
    if(bttp){
        bttp.addEventListener("click", function(){
        let elementos = document.getElementById("container").getElementsByTagName("div")
           
        if(elementos.length > 0){
            elementos[elementos.length-1].remove()
        }


        div.innerHTML = ` 
        <div class="Poryectos" id="heeroDemo">
          <h2>Dungeon Heero Demo</h2>
          <p>Story mode game </p>
          <p>game where you embody the life of a villager who returns to his town after years and sees that they have been attacked and robbed by evil beings,CAN YOU DEFEND HIM?</p>
          <p>Download the demo of the game here ->  <a class="abut" href="https://github.com/NahuelCastillo/DugeonHero_Demo" target="_blank">Click aqui </a></p>
          <P>Game created with Unity and C#, sprite resources and images from the internet</P>
        
          
          <div class="silder">
          <img src="/Img/Proyectos/hero1.png">
          <img src="/Img/Proyectos/hero2.png">
          <img src="/Img/Proyectos/hero3.png">
          </div>
          <div>
          <h3 class="CenterH">Demo desmotrativa</h3>
          <iframe  class="video" src="https://drive.google.com/file/d/1NEYb4Zm1AikODpWFh9saFBZB8GaYgjpL/preview" width="854 " height="480" allow="autoplay"></iframe>
          </div>
        </div>  
        `
        });}
        
    
    if(bttm){
    bttm.addEventListener("click", function(){
         let elementos = document.getElementById("container").getElementsByTagName("div")
           
        if(elementos.length > 0){
             elementos[elementos.length-1].remove()
         }
            


        div.innerHTML = ` 
        <div class="Poryectos"  id="mygymbackgrou">
        <h2>MyGym</h2>
        <p>Pagina Web para administrar gimnasios.</p>
        <p>Proyecto de web crada desde 0 utilizando Python (flask), HTML, CSS  y JavaScrips.</p>
        <P>Esta pagina fue creada para poder administrar gimnasios desde su creacion o su busqueda dentro de un hambiente estipulado.</P>
        <p> Link del codigo ->  <a class="abut" href="https://github.com/NahuelCastillo/MyGym" target="_blank">Click aqui </a></p>
        <p> Link de recursos de la pagina, Analisis de mercado, foda, presentacion ->  <a class="abut" href="https://drive.google.com/drive/folders/1Qo0Z3hl5tKtxepdUz0n-G0eRwjzSjkuS?usp=sharing" target="_blank"> Click aqui </a></p>
  
        <div class="silder">
        <img src="/Img/Proyectos/mygym1.png">
        <img src="/Img/Proyectos/myGym2.png">
        <img src="/Img/Proyectos/mygym3.png">
        </div>
        <div>
        <h3 class="CenterH">Demo desmotrativa</h3>
        <iframe class="video" src="https://drive.google.com/file/d/1Y17mL03VG8r1IlMGyMYF0m64wNY5hxUA/preview" width="854" height="480 allow="autoplay"></iframe>
        </div>
    `
        });}


    /*Esto es para soltar el campo de contac */

        if(bttc){
        bttc.addEventListener("click", function(){
        div.innerHTML = `
        <div class="container">
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
        <button type="submit" class="btn btn-lg btn-dark btn-block"> <span>Submit Form  </span> </button>
        </div>
        </form>
        </div>
        ` 
    })}



}


