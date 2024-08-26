let enter = document.querySelector(".input-c")



let  kelvin = document.querySelector(".kelvin")
let  farenhite = document.querySelector(".farenhite")
let  Rankine = document.querySelector(".Rankine")
let  celcius = document.querySelector(".celcius")

let  btn = document.querySelector("#btn1")



enter.addEventListener("input",function(){
    var temp =  parseFloat(this.value);

btn.addEventListener("click",function(){

    let c = temp;
    let k = (temp + 273.15);
    let f = (temp * 9/5) +32;
    let r = f + 459.67;
    kelvin.value = k;
    farenhite.value = f
    Rankine.value = r
    celcius.value = c

    
})
})


enter.addEventListener("click",function(){
    kelvin.value = 0;
    farenhite.value = 0;
    Rankine.value = 0;
    celcius.value = 0;
})