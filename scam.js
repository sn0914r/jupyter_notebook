import CODES from "./data.js";
document.addEventListener("DOMContentLoaded", ()=>{
    const available_codes = ['9', '10', '11', '12'];

    const params = new URLSearchParams(window.location.search)
    const exp = params.get("exp");
    console.log("exp: ", exp)

    const element = document.getElementById("code-output");

    available_codes.includes(exp) && (element.innerHTML = `<pre>${CODES[`exp-${exp}`]}</pre>`)
    
})
