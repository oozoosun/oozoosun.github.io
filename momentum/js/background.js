
const bg_init = () => {
    //API 를 이용한 접속    
    //fetch(URL).then( (response)=>{} ).then( (data)=>{ }).catch( (error)=>{} );
    let url = './image_unsplash.json';
    fetch(url).then( (response)=>{
        return response.json();
    }).then( (data)=>{
        // console.log( data );
        //바디의 백그라운드 이미지 변경
        const elemBody = document.body;
        const idx = Math.floor(Math.random()*data.length);
        elemBody.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${data[idx].urls.full})`;
    }).catch( (error)=>{
        console.log( error );
    });
}
bg_init();