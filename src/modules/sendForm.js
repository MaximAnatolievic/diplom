const sendForm = () =>{
    const 
    errorMessage = 'Что-то пошло не так',
    waitMessage = 'Ожидаем ответа сервера',    
    thanks = document.querySelector('#thanks'),
    message =  thanks.querySelector('p'),
    sucsessMessage =  message.textContent,
    forms = document.querySelectorAll('form');

    const clear = () =>{
        document.querySelectorAll('[placeholder="Промокод"]').forEach(item => {
            item.value = '';
        });      
        document.querySelectorAll('[placeholder="Ваше имя..."]').forEach(item => {
            item.value = '';
        }); 
        document.querySelectorAll('[placeholder="Ваш номер телефона..."]').forEach(item => {
            item.value = '';
        }); 
        document.querySelectorAll('[type="checkbox"]').forEach(item => {
            item.checked = false;
        }); 
    }

    forms.forEach(item => {
        item.addEventListener('submit', event => {
            event.preventDefault();
            const check = item.querySelector('[type="checkbox"]');
            if(!check.checked){
                alert('Необходимо подтвердить согласие на обработку персональных данных');
                throw new Error('personal data not accepted');
            }
            const formData = new FormData(item);
            const body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            if(item.id ==='form1' || item.id ==='form2' ){
                item.parentElement.parentElement.parentElement.style.display = 'none';
            };
            clear();
            thanks.style.display = 'block';
            message.textContent = waitMessage;

            const applySend = resp => {

                if (resp.status !== 200) {                      
                    message.textContent = errorMessage;
                    thanks.style.display = 'block';
                                                        
                    setTimeout(()=>{
                        thanks.style.display = 'none';
                    }, 2000);
                    
                    throw new Error('Network status is not 200');
                };

                message.textContent = sucsessMessage;
                thanks.style.display = 'block';
                setTimeout(()=>{
                    thanks.style.display = 'none';
                }, 2000); 
                

            };

            const postData = body => fetch('./server.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            postData(body)
            .then(applySend)
            .catch((error) => {
                console.error(error)});
        });
    });

}
export default sendForm;
