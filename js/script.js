
let list = document.querySelectorAll(".list--box");



 for (var i = 0; i < list.length; i++){
    list[i].onclick = function(){
       setClasses = !this.classList.contains("active");
       setClass(list, "active", "remove");
       if(setClasses){
          this.className += " active";
       }
    }
 }
 function setClass(element, className, remove){
    for (var i = 0; i <element.length; i++){
       element[i].classList[remove](className);
    }
 }