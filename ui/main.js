console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML = 'New Value';
var img=document.getImgById('madi');
var marginLeft=0;
function moveRight(){
var marginLeft = marginLeft + 5;
img.style.marginLeft=marginLeft + 'px';
}
img.onclick=function()
{
    var interval = setInterval(moveRight,50);
};
