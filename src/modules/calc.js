const
mozaikaPrice = {
    1: 1999,
    6: 9900,
    9: 13900,
    12: 19900,
},
schelkovoPrice = {
    1: 2999,
    6: 14990,
    9: 21990,
    12: 24990,
},
time = document.querySelectorAll('.time>input'),
mozaikaCheck = document.getElementById('card_leto_mozaika'),
schelkovoCheck = document.getElementById('card_leto_schelkovo'),
cardCheck = document.getElementById('card_check'),
priceTotal = document.getElementById('price-total');

function calc(){
    let price;
    document.getElementById('cards').addEventListener('input', ()=>{
        if(mozaikaCheck.checked){
            time.forEach((elem)=>{
                if(elem.checked)price=mozaikaPrice[elem.value];
            });
        }else if(schelkovoCheck.checked){
            time.forEach((elem)=>{
                if(elem.checked)price=schelkovoPrice[elem.value];
            });
        };
        let promo = document.getElementById('cards').querySelector('[placeholder="Промокод"]');
        if(promo.value.toUpperCase()==='ТЕЛО2019'){
            price *= 0.7;
        };  
        priceTotal.textContent = price;
    });

}
export default calc;