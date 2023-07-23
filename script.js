const container = document.querySelector(".container");

const refreshBtn = document.querySelector(".refresh-btn");

const maxBoxes=32;

const generatePalatte=() => {
    container.innerHTML="";//clearing the container
    for(let i=0;i< maxBoxes;i++){
        //const element =array[i];
    
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex=`#${randomHex.padStart(6,0)}`;
    const color=document.createElement("li");
    color.classList.add("color");
    color.innerHTML=`<div class="rect-box" style="background:${randomHex}"></div>
                    <span class="hex-value">${randomHex}</span>`;
    //console.log(randomHex);
    color.addEventListener("click",() => copyColor(color,randomHex));
    container.appendChild(color);
}
}
generatePalatte();

const copyColor=(elem,hexval) =>{
   // console.log(elem,hexval)
   const colorElement=elem.querySelector(".hex-value");
   navigator.clipboard.writeText(hexval).then(()=>{
    colorElement.innerText="Copied";
    setTimeout(() => colorElement.innerText=hexval,1000);
   }).catch(()=>alert("Failed to copy code"));
}

refreshBtn.addEventListener("click",generatePalatte);


