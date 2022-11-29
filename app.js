"use strict";
// const btn = document.querySelector(".btn");
// const container = document.querySelector(".container");
// const item = document.querySelector(".item");

// // let msg = +prompt("how many box do you want??");

// let items = [];
// for (let i = 1; i <= msg; i++) {
//   items[i]='<div class="item">hello</div>';
// }


// btn.addEventListener("click", function (e) {
//   items.forEach((el) => {
//     container.insertAdjacentHTML("beforeend", el);
//   });
// });

const randInt=function(min,max){
  return Math.floor(Math.random()*(max-min+1) + min)
}
const randColor=function(){
 return `rgb(${randInt(0,255)},${randInt(0,255)},${randInt(0,255)})`
}

document.querySelector('.nav').addEventListener('click',function(e){
    this.style.backgroundColor=randColor()
    console.log(e.target,e.currentTarget);
    // console.log(e.currentTarget===this);
})

document.querySelector('.left-nav').addEventListener('click',function(e){
  this.style.backgroundColor=randColor()
  console.log(e.target, 'and' , e.currentTarget);
  // console.log(e.currentTarget===this);

})

document.querySelector('.nav-ul').addEventListener('click',function(e){
  this.style.backgroundColor=randColor()
  console.log(e.target, 'and' , e.currentTarget);
  console.log(e.currentTarget===this);
})



// const uls=document.querySelector('.nav-ul')
// // console.log(uls.childNodes);
// // console.log(uls.children);
// console.log(uls.parentElement.children);
// console.log(uls.previousElementSibling);
// uls.closest('.nav-title').style.background="red"