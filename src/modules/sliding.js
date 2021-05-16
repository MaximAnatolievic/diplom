const
slider = document.querySelector('.main-slider'),
slide = slider.querySelectorAll('.slide'),
servSlider = document.querySelector('.services-slider'),
servSlide = servSlider.querySelectorAll('.slide');

function sliding(){

    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };

    const nextSlide = (elem, index) => {
        elem[index].style.display = 'inline-block';
    };


    const mainSlide = () => {
        let currentSlide = 0;
        let interval;
        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide);
            currentSlide++;
            if (currentSlide >= slide.length)currentSlide = 0;
            nextSlide(slide, currentSlide);
        };

        const startSlide = (time = 2000) => {
            interval = setInterval(autoPlaySlide, time);
        };
        startSlide();

    }
    mainSlide();

    const serviceSlide = () => {
        servSlide.forEach((element, key) => {
            if(key>=5){
                element.style.display = 'none';
            }
        });

        let firstSlide = 0;
        let lastSlide = 4;
        let interval;
        const autoPlaySlide = () => {
            prevSlide(servSlide, firstSlide);
            firstSlide++;

            if (lastSlide >= servSlide.length){
                firstSlide = 0;
                lastSlide = 4;
            }
            nextSlide(servSlide, lastSlide);
        };

        const startSlide = (time = 2000) => {
            interval = setInterval(autoPlaySlide, time);
        };
        startSlide();

    }
    serviceSlide();
}

sliding();
export default sliding;