import { Counter } from "./components/Counter.js"
import { Timer } from "./components/Timer.js"
import { CheckBox } from "./components/checkbox.js"




const checkbox1 = new CheckBox();


checkbox1.mount(document.getElementById("totalContainer")); 
document.body.addEventListener("change",function(e){
 
      let target = e.target;
   
     console.log(target.id);


      switch(target.id){
       
          case "CounterId":  
          console.log("counter displayed");

          
          //to mount counter only once
           if(root.firstChild){

              
               
                root.removeChild(root.firstElementChild);
             }

            const counter1=new Counter();
            counter1.mount(document.getElementById("root"));
             break;



      case "TimerId":
        console.log("timer displayed");

           
        //to mount timer only once
             if(root.firstChild){
 
            
               
                 root.removeChild(root.firstElementChild);
              }
 
             const timer1=new Timer();
             timer1.mount(document.getElementById("root"));
              break;



      }


});




