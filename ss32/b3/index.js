let môn=[
    {
        monhoc: "toán",
    },
    {
        monhoc: "lí"
    }
]
function printf(){
    let inn=document.getElementById("in")
    let data=``
    for(let i=0;i<môn.length;i++){
        data+=`<li>${môn[i].monhoc}</li>`
    }
    inn.innerHTML=data
}
printf()
function thêm(e){
    e.preventDefault()
    let temp={
        monhoc: e.target.tenmon.value
    }
    if(!temp.monhoc){
        alert("tên môn học không được để trống!")
        return
    }
    môn.push(temp)
    printf()
}