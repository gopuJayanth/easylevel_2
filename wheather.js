let city = document.querySelector("#city")
let type = document.querySelector("#type")
let temp = document.querySelector("#temp")
let image = document.querySelector("#image")
let input = document.querySelector("#box") ;
let API_key =  "609e78f544dd6cba74bedc75d89a5a3e"

const  data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`)  
    console.log(getData)
    let jsonData = await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);
    if(jsonData.cod == 404){
        alert("Enter Currect Location")
    }

   City.innerHTML = jsonData.name;
   type.innerHTML = Math.floor(jsonData.main.temp)+"ºC"
   temp.innerHTML = jsonData.weather[0].main;

   input.value =""

//    if (type.innerHTML == 404){
//     alert("Enter Currect Location")
//    }
}
function fun(){
    search = input.value;
    data(search)

}
data()