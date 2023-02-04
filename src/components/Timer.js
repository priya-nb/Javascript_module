
import { generateUniqueId } from "./Unique_id.js"; 

//resuable piece of code and ui




class Timer{
    constructor(){
        this.count1=0;
        this.minutes=0;
        this.seconds=0;
        this.miliseconds=0;
        this.timerRunning=false;
        this.interval;






    this.minutesid=generateUniqueId({prefix:"Minutes"});
    this.secondsid=generateUniqueId({prefix:"Seconds"});
    this.milisecondsid=generateUniqueId({prefix:"Miliseconds"});
    
    };




    startTimer(){
    
        this.count1=this.count1+1;
    
    
        this.minutes=Math.floor((this.count1/100)/60);
        this.seconds=Math.floor((this.count1/100)-(this.minutes*60));
        this.miliseconds=Math.floor(this.count1-(this.seconds*100)-(this.minutes*6000));
   
    
            
        document.getElementById(this.minutesid).innerText=this.minutes+":";
        document.getElementById(this.secondsid).innerText=this.seconds+":";
        document.getElementById(this.milisecondsid).innerText=this.miliseconds;



       

    }
  

/*


    returnData(time){
    
        return this.time >=10 ? this.time : `0${this.time}`;
    }

    
  */
    

    //click on start button

startButton(){
     
  
    if(!this.timerRunning){
    //setinterval is predefined it will call starttimer continuosly for every 10 interval
     this.interval = setInterval(this.startTimer.bind(this),10);   
  
      this.timerRunning=true;

   }

}

//click on pause button
pauseButton(){

  clearInterval(this.interval); 
};

resetButton(){

    clearInterval(this.interval);
    
     this.count1=0;
     this.minutes=0;
     this.seconds=0;
     this.miliseconds=0;
     this.timerRunning=false;
  


    document.getElementById(this.minutesid).innerText=(this.minutes)+":";
    document.getElementById(this.secondsid).innerText=(this.seconds)+":";
    document.getElementById(this.milisecondsid).innerText=(this.miliseconds);
    
    }


   

    
render(){

        //create the relevant HTML dom elements

const timerContainer=document.createElement("div");
const card_heading=document.createElement("h1");
const display_time=document.createElement("h1");
const Minutes=document.createElement("span");
const Seconds=document.createElement("span");
const Miliseconds=document.createElement("span");
const srtButton=document.createElement("button");
const pseButton=document.createElement("button");
const rstButton=document.createElement("button");


//add some ids and  classes

 timerContainer.classList.add("timerContainer");
 card_heading.classList.add("card_heading");
 display_time.classList.add("display_time");

  Minutes.id=this.minutesid;
 Seconds.id=this.secondsid;
 Miliseconds.id=this.milisecondsid;
 srtButton.id="start";
 pseButton.id="pause";
 rstButton.id="reset";
 //const body=document.body;
 //body.classList.add("green");


//add some text inside the element

card_heading.innerText="Timer";
Minutes.innerText="00:";
Seconds.innerText="00:";
Miliseconds.innerText="00";

srtButton.innerText="START";
pseButton.innerText="PAUSE";
rstButton.innerText="RESET";


//adding event listener



//add a child element


timerContainer.appendChild(card_heading);

timerContainer.appendChild(display_time);
display_time.appendChild(Minutes);
display_time.appendChild(Seconds);
display_time.appendChild(Miliseconds);
timerContainer.appendChild(srtButton);
timerContainer.appendChild(pseButton);
timerContainer.appendChild(rstButton);





srtButton.onclick=this.startButton.bind(this);
pseButton.onclick=this.pauseButton.bind(this);
rstButton.onclick=this.resetButton.bind(this);
//document.body.appendChild(timerContainer);



return timerContainer;

   
 }
mount(element){

    if(element){
        element.appendChild(this.render());

        return;
    }

    

    document.body.appendChild(this.render());
    return;

  }

}

export { Timer };
