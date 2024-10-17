const inp=document.getElementById("inp");

const btn=document.getElementById("btn");
let val='';
btn.addEventListener("click" ,(event)=> {
    event.preventDefault();
    val=Number(inp.value);
    generatePass(val);
})

function generatePass(inp) {
    const characters = "1234567890!@#$%^&*()?-_=+`~qwertyuiop[]asdfghjkl;zxcvbnm,./QWERTYUIOP{}ASDFGHJKL:ZXCVBNM<>";

    let pass='';
    for(let i=0;i<val;i++){
        let idx=Math.floor(Math.random()*characters.length);
        pass+=characters[idx];
    }
    const p=document.getElementById("password");
    p.textContent=pass;
}