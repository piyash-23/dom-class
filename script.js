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

let div = document.querySelector(".cla");
div.style.textAlign  = "center";