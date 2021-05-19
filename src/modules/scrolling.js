const menu = document.querySelector('.top-menu'),
block = document.querySelector('.about-club'),
arrowUp = document.getElementById('totop');
arrowUp.style.display = 'none';
let top = menu.getBoundingClientRect().top,
blockBot = block.getBoundingClientRect().bottom;

function scrolling(){
    document.addEventListener('scroll', ()=>{
        let pos = window.pageYOffset;
        if(blockBot<=pos){
            arrowUp.style.display = 'block';
        }else if(blockBot>=pos){
            arrowUp.style.display = 'none';
        }
        if(document.documentElement.clientWidth <= 768){
            
            //console.log(pos);
            //console.log(top);
            if(top < pos){
                menu.style.cssText = `position: fixed`;
                menu.style.top = pos;
            }else if (top>=pos){
                menu.style.cssText = `position: ""`;
                menu.style.top = top;
            }  
        }else if(document.documentElement.clientWidth >= 768) {
            menu.style.cssText = `position: ""`;
            menu.style.top = top;
        }
    });
}

export default scrolling;
