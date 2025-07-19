import CODES from "./data.js";
document.addEventListener("DOMContentLoaded", ()=>{
    const available_codes = Object.keys(CODES);

    const params = new URLSearchParams(window.location.search)
    const exp = `exp-${params.get("exp")}`;
    console.log(exp)

    const element = document.getElementById("code-output");

    available_codes.includes(exp) && (element.innerHTML = `<pre>${CODES[exp]}</pre>`)
    
})
