let num = 0 ;
let row = document.querySelectorAll("section");
let arrow = document.querySelectorAll("img");
for (i = 0 ; i<row.length;i++){
    let temp = row[i].nextElementSibling.clientHeight;
    temp = temp + 15;
    row[i].nextElementSibling.setAttribute("data-h",temp);
    row[i].nextElementSibling.style.height = "0";

}
row.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        num = index;
        let _h = item.nextElementSibling.getAttribute("data-h")
        let _status = item.nextElementSibling.getAttribute("data-status")
        if(_status == "off"){
            item.nextElementSibling.style.height = _h +"px";
            item.nextElementSibling.setAttribute("data-status","on");
            item.nextElementSibling.style.opacity= "1";
            arrow[num].src = "assets/img/minus.svg"
        }else{
            item.nextElementSibling.style.height = "0px";
            item.nextElementSibling.style.opacity = "0" 
            item.nextElementSibling.setAttribute("data-status","off");
            arrow[num].src ="assets/img/plus.svg"
        }
        for(let k = 0;k<row.length;k++){
            if(k !=num){
                row[k].nextElementSibling.style.height="0px";
                row[k].nextElementSibling.style.opacity = "0";
                row[k].nextElementSibling.setAttribute("data-status","off")
                arrow[k].src="assets/img/plus.svg"
            }
        }
    })
})