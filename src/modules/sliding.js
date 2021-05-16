const
slider = document.querySelector('.main-slider'),
slide = slider.querySelectorAll('.slide'),
servSlider = document.querySelector('.services-slider'),
servSlide = servSlider.querySelectorAll('.slide'),
gallerySlider = document.querySelector('.gallery-slider'),
gallerySlide = gallerySlider.querySelectorAll('.slide');

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

        const startSlide = (time = 3000) => {
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


        let first = 0;
        let last = 4;

        const playSlide = () => {
            servSlide.forEach((element, key) => {
                if(key>=first&&key<=last){
                    element.style.display = 'block';
                }else if(key<first||key>last){
                    element.style.display = 'none';
                }
            });
            first++;
            last++;
            if(first>4){
                first = 0;
                last = 4;
            }            

        }
        const autoPlaySlide = () => {
            setInterval(playSlide, 2100);
        }
        autoPlaySlide();
    }
    serviceSlide();


    const galSlide = () => {
        gallerySlide.forEach((elem, key)=>{
            if(key >= 1){
                elem.style.display = 'none';
            }
        });
        let currentGalSlide = 0;
        let interval;
        const autoPlayGalSlide = () => {
            prevSlide(gallerySlide, currentGalSlide);
            currentGalSlide++;
            if (currentGalSlide >= gallerySlide.length)currentGalSlide = 0;
            nextSlide(gallerySlide, currentGalSlide);
        };

        const startGalSlide = (time = 1900) => {
            interval = setInterval(autoPlayGalSlide, time);
        };
        startGalSlide();

    }
    galSlide();
}

sliding();
export default sliding;