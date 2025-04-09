let container=document.getElementById("container")
function changeColor(){
    let r=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    container.style.backgroundColor=`rgb(${r},${g},${b})`
}
