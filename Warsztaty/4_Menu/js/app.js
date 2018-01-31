/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function () {

    var menu = document.querySelectorAll('.nav>ul>li');
    console.log(menu);

    for(var i=0; i<menu.length; i++){
        menu[i].addEventListener('mouseover', function (event) {
            if(this.children.length > null){
                this.firstElementChild.style.display = "block";
            }
        });
        menu[i].addEventListener('mouseout', function (event) {
            if(this.children.length > null){
                this.firstElementChild.style.display = "none";
            }
        });
    }
    /*Strona działa dobrze*/
});
