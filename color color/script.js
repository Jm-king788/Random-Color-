const container = document.querySelector(".container")
const refreshBtn = document.querySelector(".refresh-btn");

const maxPB = 12;

const gnerateP = () =>{
    container.innerHTML= ""; // clearing the container
    for(let i = 0; i < maxPB; i++){
let randomHex = Math.floor(Math.random()* 0xffffff).toString(16);
randomHex = `#${randomHex.padStart(6, "0")}`;

// create a mew "li" element  in container
const color = document.createElement("li");
color.classList.add("color");
color.innerHTML=`<div class="rect-box" style="background: ${randomHex}"></div>
                 <span class="hex-value">${randomHex}</span>`;


container.appendChild(color);

                 //                                       console.log(randomHex);
                 // clicking  event to copy 
                 color.addEventListener("click", () => copyColor(color,randomHex));
                 container.appendChild(color);


}
}
gnerateP();

const copyColor =(elem , hexVal) =>{
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then(() =>{ 
        colorElement.innerText = "copied";
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("failed to copy color"))

    console.log(elem, hexVal);


}

refreshBtn.addEventListener("click",gnerateP);