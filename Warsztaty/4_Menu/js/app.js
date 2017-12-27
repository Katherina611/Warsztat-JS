/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function () {

    console.log('Działa');
    var list=document.querySelectorAll('.nav ul');
    var list1=document.querySelector('.nav ul li');
    var list2=list1.nextElementSibling;
    var list2ul=list2.firstElementChild;
    var list3=list2.nextElementSibling;
    var list4=list3.nextElementSibling;
    var list4ul=list4.firstElementChild;
    console.log(list);
    console.log(list1);
    console.log(list2);
    console.log(list3);
    console.log(list4);
    console.log(list2ul);
    console.log(list4ul);
    /*
    list.forEach(function(element) {
        element.addEventListener('mouseover', function (event) {
            console.log('działa');
        });
    });

    list.forEach(function(element) {
        element.addEventListener('mouseout', function (event) {
            console.log('działa');
        });
    });

*/

    list1.addEventListener('mouseover', function (event) {
        console.log(this.outerHTML);
    });
    list1.addEventListener('mouseout', function (event) {
        console.log('działa');
    });


    list2.addEventListener('mouseover', function (event) {
        list2ul.style.display='block';
        console.log(list2ul.outerHTML);
    });
    list2.addEventListener('mouseout', function (event) {
        list2ul.style.display='none';
        console.log('działa');
    });



    list3.addEventListener('mouseover', function (event) {
        console.log(this.outerHTML);
    });
    list3.addEventListener('mouseout', function (event) {
        console.log('działa');
    });



    list4.addEventListener('mouseover', function (event) {
        list4ul.style.display='block';
        console.log(list4ul.outerHTML);
    });
    list4.addEventListener('mouseout', function (event) {
        list4ul.style.display='none';
        console.log('działa');
    });

    /*Strona działa dobrze*/
    

});
