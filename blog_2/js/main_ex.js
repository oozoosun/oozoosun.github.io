// 객체
const elemBtn = document.querySelector(".thankyou_message > p.close");
const elemSec = document.querySelectorAll('main > section');
const elemPortBtn = document.querySelectorAll('.portfolio .moveBtn i');
const elemPortCard = document.querySelectorAll('.portfolio .card');
const elemCardList = document.querySelector('.portfolio .cardlist');

// 전역변수 사용
let currentPage = 0;
let currentCard = 0;
let currentPos = 0;

// 페이지 스크롤 이벤트 처리기
const onEventWheel = (event) => {
    event.preventDefault();
    if (event.deltaY >= 0) {
        // 아래로 스크롤할 때
        currentPage++;
        if (currentPage >= 4) {
            currentPage = 4;
        }
    } else {
        // 위로 스크롤할 때
        currentPage--;
        if (currentPage <= 0) {
            currentPage = 0;
        }
    }
    
    let topPos = 0;
    if (currentPage >= 1) {
        topPos = elemSec[currentPage - 1].offsetTop;
    }
    
    window.scrollTo({ left: 0, top: topPos, behavior: "smooth" });
};

// 모바일 레이아웃에서 카드 변경
const mobileCurrentCard = (index) => {
    if (index === 1) {
        // 왼쪽 버튼 (prev)
        currentCard--;
        if (currentCard < 0) {
            currentCard = 0;
        }
    } else {
        // 오른쪽 버튼 (next)
        currentCard++;
        if (currentCard >= elemPortCard.length - 1) {
            currentCard = elemPortCard.length - 1;
        }
    }
    
    const obj = document.querySelector('.card.on');
    obj.classList.remove('on');
    elemPortCard[currentCard].classList.add('on');
};

// PC 레이아웃에서 카드 변경
const pcCurrentCard = (index) => {
    let posFlag = 0;
    if (index === 1) {
        posFlag = -1;
    } else {
        posFlag = 1;
    }
    
    // 카드 리스트 위치값 변경
    currentPos += posFlag * 100;
    if (currentPos > 0) {
        currentPos = 0;
    } else if (currentPos < -1200) {
        currentPos = -1200;
    }
    
    elemCardList.style.transform = `translateX(${currentPos}px)`;
};

// 포트폴리오 버튼 클릭 이벤트 처리기
const onEventPortBtn = (event) => {
    let cssMedia = window.matchMedia('(min-width: 1024px)').matches;
    if (cssMedia) {
        // PC 레이아웃
        pcCurrentCard(event.target.dataset.index);
    } else {
        // 모바일 및 태블릿 레이아웃
        mobileCurrentCard(event.target.dataset.index);
    }
};

// 초기화 함수
const init = () => {
    // 닫기 버튼 이벤트 처리
    elemBtn.addEventListener("click", () => {
        elemBtn.parentElement.style.display = "none";
    });
    
    // 페이지 스크롤 이벤트 설정
    window.addEventListener('wheel', onEventWheel, { passive: false });
    
    // 포트폴리오 버튼 클릭 이벤트 설정
    elemPortBtn.forEach((value) => {
        value.addEventListener('click', onEventPortBtn);
    });
    
    // 창 크기 변경 이벤트 시 초기화
    window.addEventListener('resize', () => {
        currentCard = 0;
        currentPos = 0;
        const obj = document.querySelector('.card.on');
        obj.classList.remove('on');
        elemPortCard[0].classList.add('on');
        elemCardList.style.transform = `translateX(0)`;
    });
};

// 초기화 함수 호출
init();