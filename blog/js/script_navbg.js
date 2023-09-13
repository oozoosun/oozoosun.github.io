const elemNav = document.querySelector('nav');
const onEventScroll = () => {
    const scrollTop= document.documentElement.scrollTop;
    
    if( scrollTop >= 100 ) {
        //백그라운드 색상을 보이도록...
        // console.log( "백그라운드 색상 보이게...");
        // elemNav.style.backgroundColor = '#000';
        elemNav.style.backgroundColor = 'rgba(0,0,0,0.8)';
    } else {
        elemNav.style.background = 'none';
    }
}
window.addEventListener('scroll',onEventScroll);
