/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener('DOMContentLoaded', function () {
    console.log('Działa');
    var allLi=document.querySelectorAll('li');
    var body=document.querySelector('body');
    console.log(allLi);
    console.log(body);


    allLi.forEach(function(element){
        element.addEventListener('click', function (event){
            var div=document.createElement('div');
            body.appendChild(div);
            div.classList='fullScreen';
            var img=document.createElement('img');
            div.appendChild(img);
            var button=document.createElement('button');
            div.appendChild(button);
            button.classList='close';
            button.innerText='Close';
            img.setAttribute('src',this.firstElementChild.getAttribute("src"));
            button.addEventListener('click', function(event){
                div.parentElement.removeChild(div);
            })

        })
    });
//Na stronie mozna byłoby dodać slider, żeby nie musieć cały czas zamykać okna, by wyświetlić kolejny obraz//
});
