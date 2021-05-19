const validat = () => {

    document.addEventListener('input', event => {
        const target = event.target;
        if (target.matches(`[placeholder="Ваше имя..."]`)) {
            target.value = target.value.replace(/[^ А-яа-я]/, '');
        } else if (target.matches('[placeholder="Ваш номер телефона..."]')) {
            target.value = target.value.replace(/[^\d\+]/g, '');
		    target.value = target.value.replace(/([0-9]{11})(.)/g, (match, val1, val2) => (match = val1));
        }
    });

    document.addEventListener('blur', event => {
        const target = event.target;
        if (target.matches(`[placeholder="Ваше имя..."]`)) {
            target.value = target.value.replace(/\s+/g, ' ');
            target.value = target.value.replace(/(\s\-)+/g, '');
            target.value = target.value.replace(/\-+/g, '-');
            target.value = target.value.replace(/^[\s\-]+/gi, '');
            target.value = target.value.replace(/\w+/gi, '');
            target.value = target.value.replace(/\-$/gi, '');
            if (target.value)target.value = target.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' ');


        } else if (target.matches('[placeholder="Ваш номер телефона..."]')) {
            target.value = target.value.replace(/^8{1}|^7|\+7/gi, '+7 ');
            target.value = target.value.replace(/^...([0-9]{3})/g, (match, val1) => (val1 = `+7 ${val1} `));
            if (target.value.length !== 14 && target.value !== '') {
                target.value = '';
                alert('Проверьте номер');
            }

        }}, true);
};

export default validat;
