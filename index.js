let valueEl = document.getElementById("value1");
let headingEl = document.getElementById("heading");
let randomNumberEl = Math.ceil(Math.random()*100);
console.log(randomNumberEl);


function Button(){
    let userValue = valueEl.value;
    let updatesValue = parseInt(userValue);
    if(updatesValue===randomNumberEl){
        headingEl.textContent = "Congratulations, You are Winner!!!"   
        headingEl.style.color = "Green"
    }
    else if(updatesValue<randomNumberEl){
        headingEl.textContent = "Too Small"   
        headingEl.style.color = "Red"
    }
    else{
        headingEl.textContent = "Too Big"   
        headingEl.style.color = "Red"
    }
}