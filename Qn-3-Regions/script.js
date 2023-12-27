const url="https://restcountries.com/v3.1/all";
const xhr= new XMLHttpRequest();
xhr.open("GET",url);
xhr.send();
xhr.onload=()=>{
    let data=JSON.parse(xhr.response);
    for(let key in data){
        const names=data[key].name.common;
        const reg=data[key].region;
        const subreg=data[key].subregion;
        const pop=data[key].population;
        console.log(names);
        console.log("  Region=",reg);
        console.log("  Sub-region=",subreg);
        console.log("  Population=",pop);

    }
}