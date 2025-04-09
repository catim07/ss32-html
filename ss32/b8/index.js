let listCV=[
    {
        việc:"phụ hồ"
    },
    {
        việc:"lập trình viên"
    }
]
function printf(){
    let list=document.getElementById("list")
    let data=``
    for(let i=0;i<listCV.length;i++){
        data+=`<div style="width: 400px;background-color: rgb(226, 226, 226); margin-top: 20px; display: flex; justify-content: space-between;">
                <ul style="list-style-type: none;">
                    <li>${listCV[i].việc}</li>
                </ul>
                <div style="display: flex; align-items: center; gap: 10px; margin-right: 10px;" >
                    <button onclick="edit(${i})" style="height: 25px;">sửa</button>
                    <button onclick="dele(${i})" style="height: 25px;">xóa</button>
                </div>
            </div>`
    }
    list.innerHTML=data;
}
printf()
function add(e){
    e.preventDefault()
    let temp={
        việc: e.target.nhập.value
    }
    listCV.push(temp)
    printf()
}
function dele(index){
    if(!confirm("bạn có chắc xóa không?")){
        return
    }
    listCV.splice(index,1)
    printf()
}
function edit(index){
    let text=prompt("mời bạn nhập công việc mới: ");
    listCV[index].việc=text;
    console.log(listCV[index].việc)
    printf();
}