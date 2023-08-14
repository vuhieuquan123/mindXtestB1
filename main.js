let colorInput = document.querySelector("#color");
let hexinput = document.querySelector("#hex");
colorInput.addEventListener('input', ()=>{
    let color = colorInput.value;
    hexinput.value = color;
    document.body.style.backgroundColor = color
}
)