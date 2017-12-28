/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function () {
    var gallery=document.querySelectorAll('#gallery img');
    var show=document.querySelector('#showButton');
    var hide=document.querySelector('#hideButton');
    var input=document.querySelector('#tagInput');

    console.log(gallery);
    console.log(show);
    console.log(hide);
    console.log(input);

    hide.addEventListener('click', function(event){
        var text=input.value;
        input.value='';
        for (i=0; i<gallery.length; i++){
            gallery[i].classList.remove('invisible');
            var tag1=gallery[i].dataset.tag;
            if (tag1.indexOf(text)>=0){
                gallery[i].classList.add('invisible');
            }
            console.log(gallery[i]);
        }
    });
    show.addEventListener('click', function(event){
        var text2=input.value;
        console.log(text2);
        for (i=0; i<gallery.length; i++){
            gallery[i].classList.add('invisible');
            var tag=gallery[i].dataset.tag;
            if (tag.indexOf(text2)>=0){
                gallery[i].classList.remove('invisible');
                console.log(gallery[i]);
            }
        }
    })
});
