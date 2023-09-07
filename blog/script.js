
const elemSpan = document.querySelector('.home span.text');
const strData = ["web publisher", "front-end Developer", "web ux designer"];
let content = strData[0].split('');
// console.log(content);
// const content = ['aaa','bbb','ccc','a','b','c','d'];
let currentIdx =0;
let textIdx = 0;


//타이핑 효과중 글자 삭제
const deleteText =() =>{
    textIdx--;
    content.pop();
    console.log(content);
    elemSpan.textContent = content.join('');
    if(textIdx >= 1 ){
        setTimeout(deleteText, 300);
    }else{
        currentIdx++;
        if(currentIdx >2) {
            currentIdx =0;
        }
        setTimeout(init,2000);

    }
}
//타이핑 효과중 글자 추가
const addText =() =>{
    let text =content[textIdx];
    textIdx+=1;//textIdx++;
    // text += 1;
    // console.log(text);
    elemSpan.textContent += text;
    if(textIdx < content.length ){
        setTimeout( addText, 300);
    }else{
        setTimeout( deleteText, 1000);
    }
    
}
// addText();
const init =() => {
    content = strData[currentIdx].split('');
    elemSpan.textContent = "";
    addText();
}

init();