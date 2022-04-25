let addKitob=document.querySelector(".kitob-input");
let addQidir=document.querySelector("#qidir");
let addqidir=document.querySelector(".btn");
let kitoblar=document.querySelector(".result");
let btnnn=document.querySelector(".btnn");
let natijaa=document.querySelector(".natija"); 

let kitoblarArry=[];

btnnn.addEventListener("click", function (evt){
  evt.preventDefault();

  let a=addKitob.value;
  kitoblarArry.push(a);
    let newLi=document.createElement("li");
    newLi.textContent=a;
    kitoblar.appendChild(newLi);
  
})

addqidir.addEventListener("click", function(e){
  e.preventDefault();
  let qidirKitob=false;
  
  for(let i=0;i<kitoblarArry.length;i++){
    b=addQidir.value.trim();
    if(b==kitoblarArry[0]){
       natijaa.textContent="Qidirilayotkan kitob bor";
       qidirKitob=true;
    }
    
  }

  if(!qidirKitob){
    natijaa.textContent="Qidirilayotkan kitob yo'q";
  }
})


