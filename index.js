
const refresh = ()=> {
    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
    
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    img1.setAttribute("src", `./images/dice${randomNumber1}.png`);
    img2.setAttribute("src", `./images/dice${randomNumber2}.png`);
    
    if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    }else if(randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    }else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}
const btn = document.querySelector(".btn");

btn.addEventListener('click', refresh);