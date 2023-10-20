const elemClock = document.querySelector('.clock');

const clock_init = () => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2,"0");
    const mm = String(now.getMinutes()).padStart(2,"0");
    const ss = String(now.getSeconds()).padStart(2,"0");
    // console.log( typeof hh );
    elemClock.textContent = `${hh}:${mm}:${ss}`;
}
clock_init();
setInterval( clock_init , 1000 );