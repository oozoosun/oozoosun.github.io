const LOGIN_KEY = "username";
const elemUserForm = document.querySelector('#loginForm');
const elemName = document.querySelector('.loginName');

const viewUserName = (txt) => {
    //form 은 안보이게
    elemUserForm.style.display = 'none';
    //p태그는 보이게
    elemName.style.display = 'block';
    elemName.textContent = `${txt} 님 반갑습니다`;
}
const onEventUserForm = (event) => {
    event.preventDefault();
    const txt = elemUserForm.querySelector('input').value;
    viewUserName(txt);
    localStorage.setItem(LOGIN_KEY,txt);
}
const login_init = () => {
    const username = localStorage.getItem(LOGIN_KEY);
    if( username ){
        //값이 있으면 hello username 으로 보이도록
        viewUserName(username);
    } else {
        //값이 없으면
        elemUserForm.addEventListener('submit',onEventUserForm);
    }
}
login_init();