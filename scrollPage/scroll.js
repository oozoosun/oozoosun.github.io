const elemSec1 = document.querySelector('.sec1');
const onEventSection1 = (event) => {
    event.preventDefault();
    if( event.deltaY > 0 ) {
        elemSec2.style.top = '0';
    }
}
elemSec1.addEventListener('wheel',onEventSection1,{passive:false});