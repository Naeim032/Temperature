const API_KEY = `4f1d71e37367f3ad5ff856b8b2aaaded`;

const loadTemperature = city =>{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then(res => res.json())
  .then(data => displayTemperature(data));
}


const displayTemperature = data =>{
  setInnerTextById('temperature', data.main.temp);
  setInnerTextById('condition', data.weather[0].main);
  console.log(data.weather[0].main);

}

const setInnerTextById = (id, text) =>{
  const temperature = document.getElementById(id);
  temperature.innerText = text;
}



document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})




loadTemperature('dhaka');