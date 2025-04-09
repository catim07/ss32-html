let list=[
    {
        môn:"học dom js"
    },
    {
        môn: "làm bài tập dom js"
    }
]
function printf(){
    let danh=document.getElementById("danh")
    let data=``;
    for(let i=0;i<list.length;i++){
        data+=`<div style="width: 900px; display: flex; justify-content: space-between;">
                    <div><li style="list-style-type: none;">${list[i].môn}</li></div>
                    <button onclick="xóa(${i})" style="font-size: 50px; background-color: red; color: white; border: none; border-radius: 10px; width: 80px; height: 80px;"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <hr>`
    }
    danh.innerHTML=data;
}
printf()
function thêm(e){
    e.preventDefault()
    let temp={
        môn: e.target.nhiệm.value
    }
    list.push(temp);
    printf()
}
function xóa(e){
    let check=+prompt(`
        mời bạn nhập số xác nhận xóa:
        1. xóa
        2.hủy`)
        if(check===2){
            return
        }else if(check===1){
            list.splice(e,1)
            printf()
        }

}