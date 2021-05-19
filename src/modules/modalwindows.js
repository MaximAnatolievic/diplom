function modalwindows(){
    const
        clubsList = document.querySelector('.clubs-list'),
        freeVisit = document.getElementById('free_visit_form'),
        callBack = document.getElementById('callback_form'),
        gift = document.getElementById('gift'),
        thanks = document.getElementById('thanks'),
        ulList = clubsList.querySelector('ul'),
        liList = ulList.querySelectorAll('li');
        let showed = false;
        document.addEventListener('click', (event)=>{
            const target = event.target;
            //console.log(target);
            

            if(target.closest('.clubs-list')&&!showed){
                ulList.style.display = 'block';
                    showed = true;        
            }else if(target != liList[0]&&target != liList[1]&& target != ulList){
                ulList.style.display = 'none';
                showed = false;  
            }

            if(target.closest('.open-popup')){
                freeVisit.style.display = 'block';
            }else if(target.closest('.close-form')||target.closest('.overlay')){
                freeVisit.style.display = 'none';
            }

            if(target.closest('.callback-btn')){
                callBack.style.display = 'block';
            }else if(target.closest('.close-form')||target.closest('.overlay')){
                callBack.style.display = 'none';            
            }

            if(target.closest('.fixed-gift')){
                document.querySelector('.fixed-gift').style.display = 'none';
                gift.style.display = 'block';
            }else if(target.closest('.close-form')||target.closest('.overlay')||target.matches('.close-btn')){
                if(thanks)thanks.style.display = 'none';
                if(gift)gift.style.display = 'none';
            }
            if(target.matches('[src="images/menu-button.png"]')){
                document.querySelector('.popup-menu').style.display = 'flex';
            }else if(target.matches('[src="images/delete.png"]')||target.matches('a')){
                document.querySelector('.popup-menu').style.display = 'none';
            }

        }
    );
}

export default modalwindows;
