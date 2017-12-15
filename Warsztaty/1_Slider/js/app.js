/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function () {
    console.log('Działa');
    var prev=document.querySelector("#prevPicture");
    var next=document.querySelector("#nextPicture");
    var allLi=document.querySelectorAll('li');
    var indexImg=0;
    allLi[indexImg].classList.add("visible");

    console.log(prev);
    console.log(next);
    console.log(allLi);


    prev.addEventListener('click', function(event){
        allLi[indexImg].classList.remove("visible");
        indexImg--;
        if (indexImg<0){
            indexImg=allLi.length-1;
        }
        allLi[indexImg].classList.add("visible");
        console.log("klik");
    });
    next.addEventListener('click', function(event){
        allLi[indexImg].classList.remove("visible");
        indexImg++;
        if(indexImg>=allLi.length){
            indexImg=0;
        }
        allLi[indexImg].classList.add("visible");
        console.log("klik");
    });
    //Gdy kończą się obrazy nic nie jest wyświetlane//







});

