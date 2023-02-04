import { generateUniqueId } from "./Unique_id.js";

//resuable piece of code and ui

class Counter{
    constructor(){
        this.count=0;
        this.counterValueid=generateUniqueId({prefix:"counterValue"});
        this.mounted=false;

    };


incrementCount(){

this.count = this.count+1;
//console.log("Increment is done", this);
  
  this.updateCount();

    }
decrementCount(){
this.count = this.count-1;

this.updateCount();

}
updateCount(){

document.getElementById(this.counterValueid).innerText=`count:${this.count}`

}




render(){
const counterContainer=document.createElement("div");
const counterHeading=document.createElement("h1");
const counterValue=document.createElement("p");
const incrementButton=document.createElement("button");
const decrementButton=document.createElement("button");


counterContainer.classList.add("counterContainer");
counterHeading.classList.add("counterHeading");
counterValue.id=this.counterValueid;
incrementButton.id=generateUniqueId({prefix:"increbutton"});
decrementButton.id=generateUniqueId({prefix:"decrebutton"});

counterHeading.innerText="Counter Component";
counterValue.innerText=`count:${this.count}`;
incrementButton.innerText="+";
decrementButton.innerText="-";

counterContainer.appendChild(counterHeading);
counterContainer.appendChild(counterValue);
counterContainer.appendChild(incrementButton);
counterContainer.appendChild(decrementButton);



//add event listeners
//tightitly relating function to the object

incrementButton.onclick = this.incrementCount.bind(this);
decrementButton.onclick = this.decrementCount.bind(this);


//return the container
return counterContainer;




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
}

export { Counter };