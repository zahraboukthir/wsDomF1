var hearts=document.getElementsByClassName("like");
console.log(hearts);
for(var i=0; i<hearts.length;i++){
    hearts[i].addEventListener('click',changecolor)
}
function changecolor(e) {
    var btn=e.target
  //  console.log(btn)
  if (btn.style.color=="blue") {
    btn.style.color="black"
  } else {
    btn.style.color="blue"
  }
}

const addto=document.getElementsByClassName("add");
var tabadd=[]
for (let index = 0; index < addto.length; index++) {
    tabadd[index]=false
    
}
console.log(tabadd)
console.log(addto)
for(let i=0; i<addto.length;i++){
    addto[i].addEventListener("click",function() {
       if (tabadd[i]==true) {
        alert("elt deja ajouter au panier")
       } else {
         // console.log(tabadd)
         let newdiv=document.createElement("div");
         newdiv.className="prod"
         // console.log(newdiv)
         let imgprod=document.createElement('img')
         imgprod.className="imgpanier"
         // console.log(imgprod)
         let srcimg=addto[i].parentElement.querySelector('img').src
         // console.log(srcimg)
         imgprod.src=srcimg
         // console.log(imgprod)
         let titre=document.createElement("p")
         titre.className="title"
         titre.innerHTML=addto[i].parentElement.querySelector('h1').innerHTML
         // console.log(titre)
         let divpm=document.createElement("div");
         let qte=document.createElement("p")
         qte.className="qte"
         qte.innerHTML=1
         //  console.log(qte)
         let btnplus=document.createElement("button")
         btnplus.className="plus"
         btnplus.innerHTML="+"
         //  console.log(btnplus)
         let btnmoins=document.createElement("button")
         btnmoins.className="moins"
         btnmoins.innerHTML="-"
         //  console.log(btnmoins)
         divpm.appendChild(btnplus)
         divpm.appendChild(qte)
         divpm.appendChild(btnmoins)
         // console.log(divpm)
         let up=document.createElement("p")
         up.className="unitprice"
        const uprice=parseInt(addto[i].parentElement.querySelector('p').innerHTML)
        up.innerHTML=uprice+" dt"
     //    console.log(up)
     let pt=document.createElement("p")
         pt.className="totalprice"
         pt.innerHTML=uprice*Number(qte.innerHTML)+" dt"
         // console.log(pt)
         let btndel=document.createElement("button")
         btndel.className="del"
         btndel.innerHTML="X"
        //  console.log(btndel)
         // console.log(uprice)
         newdiv.appendChild(imgprod)
         newdiv.appendChild(titre)
         newdiv.appendChild(divpm)
         newdiv.appendChild(up)
         newdiv.appendChild(pt)
         newdiv.appendChild(btndel)
         console.log(newdiv)
          const pn=document.getElementById("panier")
         pn.appendChild(newdiv)

         tabadd[i]=true
         //total
         var total=document.getElementById("total").querySelector("span")
         total.innerHTML=parseInt(total.innerHTML)+uprice +" dt"
         //increment qte
         btnplus.addEventListener("click",increment)
         btnmoins.addEventListener("click",decrement)
       }
       
    })
}
function increment(e) {
  var plus=e.target
  // console.log(plus)
  var qtevalue=plus.parentElement.querySelector(".qte").innerHTML
  qtevalue++
  var total=document.getElementById("total").querySelector("span")
  plus.parentElement.querySelector(".qte").innerHTML=qtevalue
  // console.log(qtevalue)
  var up=plus.parentElement.parentElement.querySelector(".unitprice").innerHTML
  var pt=plus.parentElement.parentElement.querySelector(".totalprice")
  pt.innerHTML=Number(qtevalue)* parseInt(up)+ " dt"
  total.innerHTML=parseInt(total.innerHTML)+parseInt(up) +" dt"
}
function decrement(e) {
  var moins=e.target
  // console.log(moins)
  var qtevalue=moins.parentElement.querySelector(".qte").innerHTML
  var total=document.getElementById("total").querySelector("span")

  // console.log(qtevalue)
  var up=moins.parentElement.parentElement.querySelector(".unitprice").innerHTML
  var pt=moins.parentElement.parentElement.querySelector(".totalprice")
  console.log(total)
  if (qtevalue>1) {
    qtevalue--
    moins.parentElement.querySelector(".qte").innerHTML=qtevalue
    pt.innerHTML=Number(qtevalue)* parseInt(up)+ " dt"
  total.innerHTML=parseInt(total.innerHTML)-parseInt(up)+ " dt"
  }
  

  
}