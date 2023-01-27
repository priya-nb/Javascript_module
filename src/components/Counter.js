//resuable piece of code and ui

class Counter{
    constructor(count){
        this.count=0;
    }


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

document.getElementById("counterValue").innerText=`count:${this.count}`

}




render(){
const counterContainer=document.createElement("div");
const counterHeading=document.createElement("h1");
const counterValue=document.createElement("p");
const incrementButton=document.createElement("button");
const decrementButton=document.createElement("button");


counterContainer.classList.add("counterContainer");
counterHeading.classList.add("counterHeading");
counterValue.id="counterValue";
incrementButton.id="increment";
decrementButton.id="decrement";


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

    //adding an HTML Component on the dOM

    //check if el is passed
    //if yes:append container to el as child
    //else append container to body as child
    if(el){
        el.appendChild(this.render());

        return;
    }


    //document.querySelector {'body'}.appendChild

    //this --instance created by the class
    //represents the variable/object created at runtime

    document.body.appendChild(this.render());
    return;
}
}

export { Counter };