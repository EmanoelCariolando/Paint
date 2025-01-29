
//Variables
    let screen = document.getElementById('tela');
    let currentCollor = 'black'
    let ctx = screen.getContext('2d');
    let canDraw = false;


//Event Listeners
      document.querySelectorAll('.colorArea .color').forEach(item => {
        item.addEventListener('click', colorClick);
      });
      screen.addEventListener('mousedown', startPainting);
      screen.addEventListener('mousemove', painting);
      screen.addEventListener('mouseup', stopPainting);
          
    
    // functions
    function colorClick(e) {
      const color = e.target.getAttribute('data-color');
      currentCollor = color;
      
      document.querySelectorAll('.color.active').forEach(element => {
        element.classList.remove('active');
      });
    
      e.target.classList.add('active');
    }
          
          
          
      function startPainting(){
       canDraw = true;
 

      }
      function painting() {
        if(canDraw){
          console.log(`desenhando`);
        }


      }
      function stopPainting(){
        if(canDraw){
          console.log(`parou de desenhar`);
        }
      }


