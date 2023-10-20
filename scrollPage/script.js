//객체 선택
const elemSec1 = document.querySelector('#sec1');
const elemSec2 = document.querySelector('#sec2');
const elemSec3 = document.querySelector('#sec3');
const elemSlider = elemSec2.querySelector('.slider');
let max_x = 0;
let pos_x = 0;

//sec1 마우스 휠 이벤트 함수
const onWheelEventSec1 = (event) =>{
    event.preventDefault();  //기본 속성값을 초기화
    // console.dir(event);
    if( event.deltaY > 0 ){
        //마우스 휠이 아래로....
        elemSec2.style.top = '0';
    }
}
//progressBar width 변경
const progressBar = () => {
    let move = (pos_x/max_x)*100;
    const bar = document.querySelector('.bar>.progress');
    bar.style.width = `${move}%`;
}
//slider 가 왼쪽,오른쪽으로 이동
const moveSliderX = (pos_y) => {
    pos_x -= pos_y; 
    if( pos_x > 0 ) {  
        pos_x = 0;
    } else if( pos_x < max_x ){
        pos_x = max_x;
    }
    elemSlider.style.transform = `translateX(${pos_x}px)`;
    progressBar();
}
//sec2 마우스 스크롤 이벤트 함수
const onWheelEventSec2 = (event) => {
    event.preventDefault();  //기본 속성값을 초기화    
    moveSliderX(event.deltaY);
    if( event.deltaY < 0 && pos_x >= 0 ){
        elemSec2.style.top = '100%';
    }
    if( event.deltaY > 0 && pos_x <= max_x){
        elemSec3.style.top = '0';
    }
}
const onWheelEventSec3 = (event) =>{
    event.preventDefault();  //기본 속성값을 초기화
    if( event.deltaY < 0 ) {
        elemSec3.style.top = '100%';
    }
}
const resize = () => {
    max_x = (elemSlider.offsetWidth - (window.innerWidth*0.6))*(-1);
    progressBar();
}
const init = () => {
    elemSec1.addEventListener('wheel', onWheelEventSec1, {passive:false});
    elemSec2.addEventListener('wheel', onWheelEventSec2, {passive:false});
    elemSec3.addEventListener('wheel', onWheelEventSec3, {passive:false});
    window.addEventListener('resize', resize );
    resize();
}
//처음 실행 함수
init();
