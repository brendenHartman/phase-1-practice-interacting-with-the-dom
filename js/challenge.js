const plB = document.getElementById("plus");
const miB = document.getElementById('minus');
let pause = document.getElementById('pause');
let counter = document.getElementById("counter");
const like = document.getElementById('heart');
const form = document.getElementById('comment-form');
const comment = document.getElementById('submit');
const input = document.getElementById('comment-input');
const div = document.getElementById('h3');
const likes = document.getElementById('likes');
let nums = 1;


plB.addEventListener("click", () => changeNum(1));
pause.addEventListener("click", function() {
    const butts = document.getElementsByTagName('button');
    if(pause.innerText == "pause"){
        for(let i = 0; i < butts.length; i++){
            if(butts[i] !== pause){
                butts[i].disabled = true;
            }
        }
        
        pause.innerText = "resume";
        nums = 0;
    }
    else{
        pause.innerText = 'pause';
        for(let i = 0; i < butts.length; i++){
            if(butts[i] !== pause){
                butts[i].disabled = false;
            }
        }
        nums = 1;
    }
});

miB.addEventListener("click", () => changeNum(-1));

function changeNum(num) {
    let value = parseInt(counter.innerText, 10);
    counter.innerText = `${value + num}`;
}

like.addEventListener('click',() => likeComment());

function likeComment(){
   let currNum = counter.textContent;
   const arr = likes.querySelectorAll('li');
   const li = document.createElement('li');
   let highestId = 0;
   li.id = currNum;
   if(arr.length != 1){
        highestId = parseInt(arr[arr.length - 1].id,10);
        if(highestId == currNum){
            arr[arr.length - 1].textContent = `the number: ${currNum}, has been liked multiple times`;
        }
        else if(highestId < currNum){
            li.textContent = `the number: ${currNum}, has been liked`;
            likes.appendChild(li);
        }
   }
   else{
    li.textContent = `the number: ${currNum}, has been liked`;
    likes.appendChild(li);
   }


}

form.addEventListener('submit',function(event){
    event.preventDefault();
    let p = document.createElement('p');
    p.textContent = input.value;
    div.appendChild(p);
    input.value = "";
});


setInterval(() => changeNum(nums), 2000);

