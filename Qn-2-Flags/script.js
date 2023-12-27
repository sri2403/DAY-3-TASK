const url="https://restcountries.com/v3.1/all";
const xhr= new XMLHttpRequest();
xhr.open("GET",url);
xhr.send();
xhr.onload=()=>{
    let data=JSON.parse(xhr.response);
    for(let key in data){
        const names=data[key].name.common;
        const flag=data[key].flags.png;
        console.log(names,"==>",flag);
    }
}
