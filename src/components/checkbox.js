import { generateUniqueId } from "./Unique_id.js";


class CheckBox{
    constructor(){

        this.mounted=false;

    };







render(){
  const totalContainer=document.createElement("div")

  const labell=document.createElement("label");
  const input1_counter=document.createElement("input");
  const labellc=document.createElement("label");
  const input2_timer=document.createElement("input");
  const labellt=document.createElement("label");
  
  const paragraph=document.createElement("p");
  
  
  
  //add some ids and  classes
  totalContainer.classList.add("totalContainer");
  
  
  input1_counter.id="CounterId";
  input2_timer.id="TimerId";
  paragraph.id="result";


  input1_counter.setAttribute("name","option");
  input2_timer.setAttribute("name","option");
  //const body=document.body;
  //body.classList.add("body_color");
  
  
  //adding labels
  var ct=document.createTextNode("To access");
  var ct1=document.createTextNode("Counter");
  var tc1=document.createTextNode("Timer");
  
  
  input1_counter.setAttribute("type", "checkbox");
  input2_timer.setAttribute("type", "checkbox");
  labell.setAttribute("for","Counter_Timer");
  labellc.setAttribute("for","Counter_");
  labellt.setAttribute("for","Timer_");
  
  
  labell.appendChild(ct);
  labellc.appendChild(ct1);
  labellt.appendChild(tc1);
  input1_counter.innerText="COUNTER";
  input2_timer.innerText="TIMER";
  
  //ShadowRoot.id="root";
  
  
  //append child to body
  
   
 // document.body.appendChild(totalContainer);
  //const root=document.getElementById("root");
 // root.appendChild(totalContainer);
 totalContainer.appendChild(labell);
 totalContainer.appendChild(labellc);
 totalContainer.appendChild(input1_counter);

 
  totalContainer.appendChild(input2_timer);
 
 
  totalContainer.appendChild(labellt);
  totalContainer.appendChild(paragraph);

//return the container
return totalContainer;




}
mount(el){


    //to create single instance of class
    if(this.mounted){
        return;
    }
    this.mounted=true;

    if(el){
        el.appendChild(this.render());

        return;
    }



    document.body.appendChild(this.render());
    return;
}
  };

export { CheckBox };