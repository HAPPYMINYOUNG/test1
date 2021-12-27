function init(){
    document.querySelector("h1").omclick=clickFunc;
}
function clickFunc(){
    this.style.backgroundColor="yellow";
}