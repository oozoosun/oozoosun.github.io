//객체 선택
const elemSec2 = document.querySelector('.sec2');
const elemSlider = elemSec2.querySelector('.slider');
//변수선언
let posLeft = 0;
let posTop = 0;
//가로 스크롤 종료 기준 위치 정하기
// const MAX_LEFT_POS = (elemSlider.scrollWidth - (document.documentElement.clientWidth*0.7))*-1;
const MAX_LEFT_POS = (elemSlider.offsetWidth - (window.innerWidth*0.7))*-1;

//함수정의
const progressBar = () => {
    //section2 의 하단 프로그래스 바 채우기
    let progress = (posLeft/MAX_LEFT_POS)*100;
    // console.log( progress );
    const bar = document.querySelector('.indicator > .bar');
    // console.log( bar );
    bar.style.width = `${progress}%`;
}
const moveSliderY = (moveY) => {
    // console.dir( elemSlider );
    posTop += moveY;
    for( let i=0 ; i<elemSlider.childElementCount ; i++ ){
        if( i%2 ) {
            elemSlider.children[i].style.transform = `translateY(${posTop/10}px)`;
        } else {
            elemSlider.children[i].style.transform = `translateY(${-posTop/10}px)`;
        }
    }
}
const moveSliderX = (moveY) => {
    posLeft -= moveY;    
    if( posLeft < MAX_LEFT_POS ) {
        posLeft = MAX_LEFT_POS;
        return;
    } else if(posLeft > 0 ) {
        posLeft = 0;
        return;
    }
    elemSlider.style.transform = `translateX(${posLeft}px)`;
    // moveSliderY(moveY);
    progressBar();
}
//이벤트 처리
const onEventSection2 = (event) => {
    event.preventDefault();
    moveSliderX(event.deltaY);
    if( event.deltaY < 0 && posLeft >=0 ){
        elemSec2.style.top = '100%';
    }
}
//이벤트 등록
elemSec2.addEventListener('wheel',onEventSection2,{passive:false});