import { Counter } from "./components/Counter.js"


const counter1 = new Counter();
console.log("counter",counter1);
counter1.mount(document.getElementById("root"));



const counter2 = new Counter();
console.log("counter",counter2);
counter1.mount(document.getElementById("root"));