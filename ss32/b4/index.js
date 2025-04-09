function check(e){
    e.preventDefault()
    let juan=document.getElementById("juan")
    let temp=document.getElementById("email").value
    if(temp.endsWith(".com")||temp.endsWith(".vn")){
        juan.innerText="email hợp lệ"
        juan.style.color="green"
    }else{
        juan.innerText="email không hợp lệ"
        juan.style.color="red"
    }

}