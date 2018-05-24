(function(){
    document.getElementById("bPlus").onclick=createSquare;
    })();

    function createSquare()
{
   
    var newObj=document.createElement("article");
    var formObj=document.getElementById("dynmicMain");
    formObj.appendChild(newObj);
    newObj.className="lay3Box";
    newObj.style.opacity=rndOpacity();
    var  temp = window.getComputedStyle(newObj).getPropertyValue("opacity");
    console.log(temp);
    newObj.onmouseover=(function(){
    newObj.style.backgroundColor="white";
    newObj.style.opacity=1;
    console.log(temp);})
    newObj.onmouseout=(function(){
    newObj.style.backgroundColor="black";
    newObj.style.opacity=temp;
  }) 
}

function rndOpacity(){
    var opc=0;
    opc=(Math.random());
    console.log(opc);
    return opc;
}

window.onload=function(){
    var newObjf=document.getElementById("Box1");
    var newObjs=document.getElementById("Box2");
    var newObjt=document.getElementById("Box3");
    var newObjfo=document.getElementById("Box4");
    var  tempf = window.getComputedStyle(newObjf).getPropertyValue("opacity");
    var  temps = window.getComputedStyle(newObjs).getPropertyValue("opacity");
    var  tempt = window.getComputedStyle(newObjt).getPropertyValue("opacity");
    var  tempfo = window.getComputedStyle(newObjfo).getPropertyValue("opacity");
   newObjf.onmouseover=(function(){
    newObjf.style.backgroundColor="white";
    newObjf.style.opacity=1;
    console.log(tempf);
})
newObjf.onmouseout=(function(){
    newObjf.style.backgroundColor="black";
    newObjf.style.opacity= tempf;
  })
 newObjs.onmouseover=(function(){
    newObjs.style.backgroundColor="white";
    newObjs.style.opacity=1;
    console.log(temps);
})
 newObjs.onmouseout=(function(){
     newObjs.style.backgroundColor="black";
     newObjs.style.opacity=temps;
 })
  newObjt.onmouseover=(function(){
    newObjt.style.backgroundColor="white";
    newObjt.style.opacity=1;
    console.log(tempt);
    })
 newObjt.onmouseout=(function(){
      newObjt.style.backgroundColor="black";
      newObjt.style.opacity=tempt;
})
newObjfo.onmouseover=(function(){
        newObjfo.style.backgroundColor="white";
        newObjfo.style.opacity=1;
        console.log(tempfo);
 })
 newObjfo.onmouseout=(function(){
          newObjfo.style.backgroundColor="black";
          newObjfo.style.opacity=tempfo;
 })
}