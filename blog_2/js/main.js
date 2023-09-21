const elemBtn = document.querySelector(".thankyou_message>p.close");
const elemSec = document.querySelectorAll('main > section');
const elemPortBtn = document.querySelectorAll('.portfolio .moveBtn i');
const elemPortCard = document.querySelectorAll('.portfolio .card');

let currentPage = 0;
let currentCard = 0;

const onEventWheel = (event) => {
    // console.log('event.deltaY');
    // console.log('wheel event');
    event.preventDefault();
    if( event.deltaY >= 0 ) {
        currentPage++;
        if( currentPage >= 4) { currentPage = 4;}
    }else{
        currentPage--;
        if( currentPage <= 0 ) { currentPage = 0; }
    }
    // let topPos =document.documentElement.clientHeight * currentPage;
    // // console.log(topPos);
    // if(currentPage >= 3 ) {
    //     topPos += (document.documentElement.clientHeight*0.8);
    // }  
    let topPos = 0;
    if( currentPage >= 1 ) {
        topPos = elemSec[currentPage-1].offsetTop;
    }
    // console.log(topPos);
    window.scrollTo( {left:0 , top:topPos, behavior:"smooth"});
}
const onEventPortBtn = (event) => {
   /* console.log('click');*/
//    console.log(event.target.dataset.index);
    if( event.target.dataset.index == 1 ){
        currentCard--;
        if( currentCard <=0 ) { currentCard = 0; }
    } else {
        currentCard++;
        if( currentCard >= elemPortCard.length-1 ) {
            currentCard = elemPortCard.length-1;
        }
    }
    const obj = document.querySelector('.card.on');
    obj.classList.remove('on');
    elemPortCard[currentCard].classList.add('on');
}

const init = () =>{
    elemBtn.addEventListener("click", () => {
        elemBtn.parentElement.style.display = "none";
    });
    window.addEventListener('wheel',onEventWheel,{passive:false});
    elemPortBtn.forEach( (value) => {
        value.addEventListener('click',onEventPortBtn);
    } );
}

init();