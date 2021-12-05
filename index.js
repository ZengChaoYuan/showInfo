function bindHtml(list){
    var html=``;
    for(let i=0;i<list.length;i++){
        html+=`<li>${list[i]}</li>`;
    }
    return html;
}
var list=obj.list;
$("#wrapper-ul").html(bindHtml(list));