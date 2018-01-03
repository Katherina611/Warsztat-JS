/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function(){

    var buttonAdd=document.querySelector('#addTaskButton');
    var buttonRemove=document.querySelector('#removeFinishedTasksButton');
    var input=document.querySelector('#taskInput');
    var taskList=document.querySelector('#taskList');
    var body=document.querySelector('body');
    var span=document.createElement('span');
    span.classList='counter';
    body.insertBefore(span,taskList);
    var clickCount=0;

    buttonAdd.addEventListener('click', function(event){

        if (input.value.length> 5&& input.value.length<100){
            clickCount+=1;
            span.innerText ='Liczba pozostałych rzeczy do zrobienia : ' + +clickCount;
            var li=document.createElement('li');
            taskList.appendChild(li);
            var header1=document.createElement('h1');
            li.appendChild(header1);
            header1.innerText=input.value;
            input.value='';
            var buttonDelate=document.createElement('button');
            li.appendChild(buttonDelate);
            buttonDelate.innerText='Delate';
            var buttonComplete=document.createElement('button');
            li.appendChild(buttonComplete);
            buttonComplete.innerText='Complete';

            buttonComplete.addEventListener('click', function (event){
                if (header1.style.color==='red'){
                    header1.style.color='black';
                    span.innerText ='Liczba pozostałych rzeczy do zrobienia : '+ ++clickCount;

                }else{
                    header1.style.color='red';
                    li.classList.add('done');
                    span.innerText ='Liczba pozostałych rzeczy do zrobienia : '+ --clickCount;
                }
            });
            buttonDelate.addEventListener('click', function(event){
                li.parentElement.removeChild(li);
                span.innerText = 'Liczba pozostałych rzeczy do zrobienia : ' + --clickCount;
            });
        }
    });
    buttonRemove.addEventListener('click', function(event){
        var listFinished = document.querySelectorAll('li.done');
        for (var i = 0; i < listFinished.length; i++) {
            listFinished[i].parentElement.removeChild(listFinished[i]);
        }

    });
    console.log(input);
    console.log(buttonAdd);
    console.log(buttonRemove);

});











