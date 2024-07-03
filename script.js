const bulbElement = document.getElementById('bulb');
let state = false;
    function toggleBulb() {
         if(state==false)   
            {
                bulbElement.src = 'bulbon.jpg';
                state = true;
            }  
            else
            {
                bulbElement.src = 'bulboff.jpg';
                state = false;
            }
        
    }
