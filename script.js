let step = 0;

function next() {

  const text = document.getElementById("text");

  if(step === 0){
    text.innerText = "Are you sure you want to be my Valentine? ❤️";
  }

  else if(step === 1){
    text.innerText = "You are not just my Valentine… you are my always and forever ❤️";
  }

  else if(step === 2){
    text.innerText = "Yeah, I knew you would agree. Thank you so much babe ❤️";
    document.getElementById("buttons").style.display="none";
  }

  step++;
}

function no(){
  alert("Wrong answer 😌 try again ❤️");
}

document.addEventListener("mousemove", e=>{
  const cursor=document.getElementById("cursor");
  cursor.style.left=e.clientX+"px";
  cursor.style.top=e.clientY+"px";
});

const hearts=document.querySelector(".hearts");

for(let i=0;i<25;i++){
  const heart=document.createElement("span");
  heart.innerHTML="❤";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(3+Math.random()*3)+"s";
  hearts.appendChild(heart);
}
