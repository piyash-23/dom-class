/*
let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + " from Apna college"

let text = document.querySelectorAll(".box");

let i=1;
for(texts of text){
    texts.innerText = `new value ${i}`
    i++;
}
    */
// ======= to call a attribute from html we need to write div.getAttribute("attribute")
/*
let jsdiv = document.querySelector("div");
console.log(jsdiv);
let att = jsdiv.getAttribute("name");
console.log(att);
*/
// to change class name we use setAttribute
/*
let para = document.querySelector("div");
console.log(para.setAttribute("cla", "newCla"))
*/

// ========== কোনো ডিভের শাখাকে স্টাইল করার জন্য আমরা ব্যবহার করি শাকাnama.style.stylename = "এখানে স্টাইল এলেমেন্ট"
/*
let div = document.querySelector(".cla");
div.style.textAlign  = "center";
*/
/* জাভাস্ক্রিপ্ট দিয়ে নতুন হেডিং দেয়া যায়। যদি div এর ভিতরে শেষে দিতে হয় তবে 
div.append(var), যদি ভিতরে শুরুতে দিতে হয় তবে div.prepend(var), যদি বাহিরে উপরে দিতে
হয় তবে div.before(var), যদি বাহিরে পরে দিতে হয় তবে div.after(var) ব্যবহার করতে হবে।
*/
/*
let element = document.createElement("button");
element.innerText = "click here!";
let div = document.querySelector("div");
div.append(element);
div.prepend(element);
div.before(element);
div.after(element);
element.style.backgroundColor = "blue";
element.style.padding = "15px 20px";
element.style.color = "white";
element.style.border = "none";
element.style.boxShadow = "0 0 15px whitesmoke inset";
element.style.borderRadius = "20px 30px";
*/
/*
let head = document.createElement("h1");
head.innerHTML = "<i> This heading is from JS file</i>";
let sit = document.querySelector("div");
sit.before(head);

head.style.background = "#eb349f"
head.style.padding = "10px 0";
head.style.textShadow = "0 0 5px gray inset";
head.style.color = "white";

let head2 = document.createElement("h2");
head2.innerText = "Down text";
sit.after(head2);
head2.style.color = "white";
head2.style.padding = "20px 0";
head2.style.background = "black";
*/
/*
// =================practice-1===================
let button = document.createElement("button");
button.innerText = "click me!";
button.style.background = "red";
button.style.color = "white";
button.style.padding= "15px 30px";
button.style.border = "none";
button.style.boxShadow = "0 0 6px gray";
button.style.borderRadius = "10%";
button.style.margin = "10px";
button.style.cursor = "pointer";
document.querySelector("body").prepend(button);

// =================practice -2 =============================

let para = document.querySelector("p");
para.classList.add("newPara");
para.classList.remove("para");
para.classList.add("para");
let topHead = document.createElement("h1");
topHead.innerHTML = "<i> Welcome to event handling</i>"
document.querySelector("body").append(topHead);
topHead.style.fontWeight = "700";
topHead.style.textAlign = "center";
*/
// =============event handling starts here===========================
/*
let btn1 = document.querySelector("#btn1");
let btn = document.createElement("p");
btn.innerText = Date();
btn1.addEventListener("click" , ()=>{
    document.querySelector(".cla").after(btn);
})
// =====================practice event class==================
let dark = document.querySelector("#dark-mode");
let body = document.querySelector("body");
let mode = "light";
dark.addEventListener("click" , ()=>{
    if(mode === "light"){
        mode = "dark";
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
    } else{
        mode = "light";
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
    }
});
*/

let guessNum = document.querySelector("#guessNum");
let compNum = Math.floor(Math.random() * 21);
let check = document.querySelector(".submit");
let startGuess = document.querySelector("#start-guess");
let again = document.querySelector(".again");
let body = document.querySelector("body");
let highscore = document.querySelector(".highscore");
let high = 0;
let compShow = document.querySelector(".ques");

let score = 20;
const scoring = document.querySelector(".score-span");
document.querySelector(".score-span").textContent = score;
console.log(compNum);

const displayMessage = function (message) {
  startGuess.textContent = message;
};

check.addEventListener("click", () => {
  if (!guessNum.value) {
    displayMessage("❌ no number");
  } else if (guessNum.value == compNum) {
    displayMessage("💥You are right");
    body.classList.add("bd");
    compShow.textContent = compNum;
    check.disabled = true;
    if (score > high) {
      high = score;
      highscore.textContent = high;
    }
  } else if (guessNum.value !== compNum) {
    if (score < 1) {
      startGuess.textContent = "You lose";
      check.disabled = true;
    } else {
      displayMessage(
        guessNum.value > compNum ? "Too high buddy!" : "Too low now"
      );
      score--;
      scoring.textContent = score;
    }
  }
});
again.addEventListener("click", () => {
  check.disabled = false;
  body.classList.remove("bd");
  score = 20;
  scoring.textContent = score;
  compShow.textContent = "?";
  compNum = Math.floor(Math.random() * 21);
  console.log(compNum);
  guessNum.value = "";
  displayMessage("Start guessing");
});
