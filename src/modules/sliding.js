const
slider = document.querySelector('.main-slider'),
slide = slider.querySelectorAll('.slide'),
servSlider = document.querySelector('.services-slider'),
servSlide = servSlider.querySelectorAll('.slide'),
gallerySlider = document.querySelector('.gallery-slider'),
gallerySlide = gallerySlider.querySelectorAll('.slide'),
dotty = document.createElement('ul'); 
dotty.classList = 'slider-dots';
gallerySlider.appendChild(dotty); 
let first = 0;
let last = 4;


function sliding(){

    const stopSlide = (interval) => {
        clearInterval(interval);
    };

    const prevArrow = (elem) => {
        const arrowleft = document.createElement('div');
        arrowleft.classList = 'slider-arrow prev';
        const spanleft = document.createElement('span');
        spanleft.classList = 'arrow arrow-left';
        arrowleft.append(spanleft);
        elem.appendChild(arrowleft);
    };
    
    const nextArrow = (elem) => {
        const arrowright = document.createElement('div');
        arrowright.classList = 'slider-arrow next';
        const spanright = document.createElement('span');
        spanright.classList = 'arrow arrow-right';
        arrowright.append(spanright);
        elem.appendChild(arrowright);
    };

    prevArrow(gallerySlider);
    nextArrow(gallerySlider);
    prevArrow(servSlider);
    nextArrow(servSlider);

    const prevSlide = (elem, index, dots=[], strClass='') => {
        elem[index].style.display = 'none';
        if(strClass)dots[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, dots=[], strClass='') => {
        elem[index].style.display = 'inline-block';
        if(strClass)dots[index].classList.add(strClass);
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
        let intervalServ;

        servSlide.forEach((element, key) => {
            if(key>=5){
                element.style.display = 'none';
            }
        });

        const playSlide = (fr = 1, lt = 1) => {
            if(first>4){
                first = 0;
                last = 4;
            }     
            first += fr;
            last += lt;
            if(first<0){
                first = 4;
                last = 8;
            }
            servSlide.forEach((element, key) => {
                if(key>=first&&key<=last){
                    element.style.display = 'block';
                }else if(key<first||key>last){
                    element.style.display = 'none';
                }


            });



        }
        const autoPlaySlide = () => {
            intervalServ = setInterval(playSlide, 2100);
        }
        autoPlaySlide();

        servSlider.addEventListener('mouseover', event => {
            if (event.target.matches('.arrow')) {
                stopSlide(intervalServ);
            }
        });

        servSlider.addEventListener('mouseout', event => {
            if (event.target.matches('.arrow')) {
                autoPlaySlide();
            }
        });

        servSlider.addEventListener('click', (event)=>{
            event.preventDefault();
            const target = event.target;
            if (!target.matches('.arrow')) return;
            if (target.matches('.arrow-right')) {
                playSlide(1, 1);
            } else if (target.matches('.arrow-left')) {
                playSlide(-1, -1);
            }
        });

    }
    serviceSlide();


    
    const galSlide = () => {
        //console.log(gallerySlide.length);
        const dot = [];
        const btn = [];
        gallerySlide.forEach((elem, key)=>{
            dot[key] = document.createElement('li');
            dot[key].classList = 'slick';
            dot[key].style.cssText = 'opacity: 1;';
            btn[key] = document.createElement('button');
            btn[key].classList = 'dot';
            btn[key].style.cssText = 'opacity: 1;';
            dot[key].appendChild(btn[key]);
            if(key === 0){
                dot[key].classList.add('slick-active');
            }else if (key >= 1){
                elem.style.display = 'none';
            }
            dotty.appendChild(dot[key]);
            
        });


        let currentGalSlide = 0;
        let intervalGal;

        const autoPlayGalSlide = () => {
            prevSlide(gallerySlide, currentGalSlide, dot, 'slick-active');
            currentGalSlide++;
            if (currentGalSlide >= gallerySlide.length)currentGalSlide = 0;
            nextSlide(gallerySlide, currentGalSlide, dot, 'slick-active');
        };

        const startGalSlide = (time = 1900) => {
            intervalGal = setInterval(autoPlayGalSlide, time);
        };
        startGalSlide();

        gallerySlider.addEventListener('click', (event)=>{
            event.preventDefault();
            const target = event.target;
            if (!target.matches('.arrow, .dot')) return;
            prevSlide(gallerySlide, currentGalSlide, document.querySelectorAll('.slick'), 'slick-active');
            if (target.matches('.arrow-right')) {
                currentGalSlide++;
                if (currentGalSlide >= gallerySlide.length)currentGalSlide = 0;
            } else if (target.matches('.arrow-left')) {
                currentGalSlide--;
                if (currentGalSlide < 0)currentGalSlide = gallerySlide.length - 1;
            } else if(target.matches('.dot')){
                document.querySelectorAll('.dot').forEach((elem, key)=>{
                    if(target===elem)currentGalSlide=key;
                });
            };
            nextSlide(gallerySlide, currentGalSlide, document.querySelectorAll('.slick'), 'slick-active');
        });

        gallerySlider.addEventListener('mouseover', event => {
            if (event.target.matches('.arrow') || event.target.matches('.dot')) {
                stopSlide(intervalGal);
            }
        });

        gallerySlider.addEventListener('mouseout', event => {
            if (event.target.matches('.arrow') || event.target.matches('.dot')) {
                startGalSlide();
            }
        });


    }
    galSlide();

}
export default sliding;
