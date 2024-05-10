var imgBox=document.querySelector(".img-box");
var imgWrap=document.querySelector(".img-wrap");
var originalImg=document.getElementById("original-image");
var line=document.querySelector(".line");

originalImg.style.width=imgBox.offsetWidth+"px";



var leftSpace = imgBox.offsetLeft;



imgBox.onmousemove=function(e){
    boxWidth=(e.pageX-leftSpace)+"px";
    imgWrap.style.width=boxWidth;
    line.style.left=boxWidth;
}