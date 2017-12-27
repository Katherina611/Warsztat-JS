/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function(){

    console.log('działa');
    var tooltip1=document.querySelector('.tooltip');
    var tooltip2=tooltip1.nextElementSibling;
    var tooltip3=tooltip2.nextElementSibling;

    console.log(tooltip1);
    console.log(tooltip2);
    console.log(tooltip3);
    var span=document.createElement('span');
    var span2=document.createElement('span');
    var span3=document.createElement('span');

    tooltip1.addEventListener('mouseover', function(event){
        tooltip1.appendChild(span);
        span.classList='tooltipText';
        span.innerText='To jest text tooltipa';

        console.log(this.dataset.text)
    });
    tooltip1.addEventListener('mouseout', function(event){
        span.parentElement.removeChild(span);
        console.log(this.dataset.text)
    });



    tooltip2.addEventListener('mouseover', function(event){
        tooltip2.appendChild(span2);
        span2.classList='tooltipText';
        span2.innerText='Tooltip 2';
        console.log(this.dataset.text)
    });
    tooltip2.addEventListener('mouseout', function(event){
        span2.parentElement.removeChild(span2);
        console.log(this.dataset.text)
    });



    tooltip3.addEventListener('mouseover', function(event){
        tooltip3.appendChild(span3);
        span3.classList='tooltipText';
        span3.innerText='Tooltip 3';
        console.log(this.dataset.text)
    });
    tooltip3.addEventListener('mouseout', function(event){
        span3.parentElement.removeChild(span3);
        console.log(this.dataset.text)
    });
});

/*wszystko działa dobrze*/

/*
 <span class="tooltipText">Text tooltipa</span>
 */
