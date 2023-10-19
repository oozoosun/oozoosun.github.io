//버튼 객체 가져오기
const elemBtn = document.querySelector('.theme');
//다크테마변수
const THEME_KEY = "darkTheme";
const onThemeClick = () => {
    const elemHtml = document.documentElement;
    if( elemHtml.classList.contains('dark') ) {
        //dark 모드
        elemHtml.classList.remove('dark');
        window.localStorage.setItem(THEME_KEY,'false');
    } else {
        //dark 모드가 아님
        elemHtml.classList.add('dark');
        window.localStorage.setItem(THEME_KEY,'true');
    }
}
const theme_init= () => {
    //초기 테마 설정
    const saveItem = window.localStorage.getItem(THEME_KEY);
    if( saveItem !== null ) {
        if( saveItem === 'true' ) {
            document.documentElement.classList.add('dark');
        }
    }
    elemBtn.addEventListener('click',onThemeClick);
}
theme_init();