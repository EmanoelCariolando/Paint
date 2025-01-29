
//Variables
    let screen = document.getElementById('tela');
    let currentCollor = 'black'
    let ctx = screen.getContext('2d');

    let canDraw = false;
    let mouseX = 0;
    let mouseY = 0;


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
          
          
          
      function startPainting(e){
       canDraw = true;
        mouseX = (e.pageX - screen.offsetLeft);
        mouseY = (e.pageY - screen.offsetTop);
        
      }

      function painting(e) {
        if(canDraw){
          drawn(e.pageX, e.pageY);
        }


      }
      function stopPainting(){
        if(canDraw){
          canDraw = false;
          console.log('parou de desenhar');
        }
      }


      function drawn(x, y){
        let pointX = x - screen.offsetLeft;
        let pointY = y - screen.offsetTop;

        ctx.beginPath();
       
        ctx.lineWidth = 7;
        ctx.lineJoin = 'round';
        ctx.moveTo(mouseX, mouseY);
        ctx.lineTo(pointX, pointY);
        ctx.closePath();
        ctx.strokeStyle = currentCollor;
        ctx.stroke();

        mouseX = pointX;
        mouseY = pointY;

      
      }
