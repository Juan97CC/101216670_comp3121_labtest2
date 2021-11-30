import logo from './logo.svg';
import './App.css';

var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name =document.querySelector('.name')
var desc =document.querySelector('.desc')
var temp =document.querySelector('.temp')
var feelsLike =document.querySelector('.feelsLike')
var tempMax =document.querySelector('.tempMax')
var tempMin =document.querySelector('.tempMin')




button.addEventListener('click', function (){
  fetch('http://api.openweathermap.org/data/2.5/weather?q='
      +inputValue.value+'&appid=5eda7780771108966079aaa22599bbc0')
      .then(response => response.json())
      .then(data => {
          console.log(data)
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var feel = data['main']['feels_like'];
        var max = data['main']['temp_max'];
        var min = data['main']['temp_min'];
        var descValue = data['weather'][0]['description'];
        name.innerHTML = "City Name :" + nameValue;
        temp.innerHTML = "Temperature :" + tempValue;
        desc.innerHTML = "Weather description :"+descValue;
        feelsLike.innerHTML ='Feels like :' + feel;
        tempMax.innerHTML = "Max Temp :" + max;
        tempMin.innerHTML = "Min temp :" + min;

      })

      .catch(err => console.log("Wrong name"))
})





function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
