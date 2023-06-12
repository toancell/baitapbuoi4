/////function hienthi() {
    //let hienthi1 = document.getElementById('hienthi');
 // hienthi1.classList.replace('hienthi','menu-lists');
//}



const bar= document.getElementById('bar')
const closeBtn= document.getElementById('close')
const hienthi1 = document.getElementById('hienthi');
function hienthi() {
    
    hienthi1.classList.replace('hienthi','menu-lists')
    bar.style.display='none'
    closeBtn.style.display='block'
}
function close(){
    hienthi1.classList.replace('menu-lists','hienthi')
    bar.style.display='block'
    closeBtn.style.display='none'
}
