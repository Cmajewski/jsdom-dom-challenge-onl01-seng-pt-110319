const counter=document.querySelector("#counter");
const plus=document.querySelector("#plus")
const minus=document.querySelector("#minus")
const ulLikes=document.querySelector(".likes")
const heart=document.querySelector("#heart")


myCounter=setInterval(function(){
    counter.textContent++;
},1000);

minus.addEventListener("click",function(event){
    counter.textContent--;
});

plus.addEventListener("click",function(event){
    counter.textContent++;
});



heart.addEventListener("click",function(event){
   

    const liLikes=document.createElement("li");
    liLikes.textContent=`${counter.textContent} has been liked ${clicks} times`;
    ulLikes.appendChild(liLikes).textContent;

    const numLikes=document.createElement("span");
    numLikes.textContent=`${numberOfClicks.push(1)} times`
    liLikes.appendChild(numLikes).textContent;
});

