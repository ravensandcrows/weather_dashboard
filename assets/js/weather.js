// global variables
const apiKey = "6deaf6816d1c342f26eef14bd39225a1";
const apiUrl = "http://api.openweathermap.org/data/2.5/forecast?q=";
const todayApiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
const searchBox = document.querySelector("#searchCity");
const searchBoxSC = document.querySelector('#searchState');
const searchBoxCC = document.querySelector('#searchCountry');
const searchBtn = document.querySelector("#searchBtn");
const saveBtn = document.querySelector('#saveBtn');

// Hero image
const hero = document.querySelector('#hero');

// Weather Condition
var weather1 = document.querySelector('#weather1');
var weather2 = document.querySelector('#weather2');
var weather3 = document.querySelector('#weather3');
var weather4 = document.querySelector('#weather4');
var weather5 = document.querySelector('#weather5');

var temp1 = document.querySelector('#temp1');
var temp2 = document.querySelector('#temp2');
var temp3 = document.querySelector('#temp3');
var temp4 = document.querySelector('#temp4');
var temp5 = document.querySelector('#temp5');

var hum1 = document.querySelector('#hum1');
var hum2 = document.querySelector('#hum2');
var hum3 = document.querySelector('#hum3');
var hum4 = document.querySelector('#hum4');
var hum5 = document.querySelector('#hum5');

var wind1 = document.querySelector('#wind1');
var wind2 = document.querySelector('#wind2');
var wind3 = document.querySelector('#wind3');
var wind4 = document.querySelector('#wind4');
var wind5 = document.querySelector('#wind5');

// JavaScript
const iconCloudy = "./assets/images/icons/cloudy.png";
const iconRainy = "./assets/images/icons/rainy.png";
const iconSnowy = "./assets/images/icons/snowy.png";
const iconSunny = "./assets/images/icons/sunny.png";
const iconWindy = "./assets/images/icons/windy.png";

const icon_day_1 = document.getElementById("icon-day-1");
const icon_day_2 = document.getElementById("icon-day-2");
const icon_day_3 = document.getElementById("icon-day-3");
const icon_day_4 = document.getElementById("icon-day-4");
const icon_day_5 = document.getElementById("icon-day-5");

// History:
let searchHistory = [];
var savedHistory = [];

// photo function
function day_icon(a, b, c) {
    if (c >= 20) {
    }
    else {
        if (a === 'Clouds') {
            b.src = iconCloudy;
        }
        else if (a === 'Rain') {
            b.src = iconRainy;
        }
        else if (a === 'Snow') {
            b.src = iconSnowy;
        }
        else if (a === 'Clear') {
            b.src = iconSunny;
        }
    }
}

// weather 5 day report
var time = dayjs().hour();

async function checkWeather(city, state, country) {
    try {
        const response = await fetch(apiUrl + city + ',' + state + ',' + country + `&appid=${apiKey}` + `&units=imperial`);
        var data = await response.json();

        const todayResponse = await fetch(todayApiUrl + city + ',' + state + ',' + country + `&appid=${apiKey}` + `&units=imperial`);
        var todayData = await todayResponse.json();

        //update city
        var newCity = document.querySelectorAll(".city_name");
        newCity.forEach(city_text => {
            city_text.innerText = data.city.name;
        });

        //today weather
        var todayWeather = document.querySelector('#today_weather');
        todayWeather.innerText = todayData.weather[0].main;

        var todayTemp = document.querySelector('#today_temp');
        todayTemp.innerText = Math.round(todayData.main.temp) + 'F';

        var todayHum = document.querySelector('#today_hum');
        todayHum.innerText = todayData.main.humidity + '%';

        var todayWind = document.querySelector('#today_wind');
        windNow = Math.round(todayData.wind.speed);
        todayWind.innerText = windNow + 'mph';

        var todayIcon = todayData.weather[0].main;
        if (windNow >= 20) {
            hero.style.backgroundImage = "url('./assets/images/windy.jpeg')";
        }
        else {
            if (todayIcon === 'Clouds') {
                hero.style.backgroundImage = "url('./assets/images/cloudy.jpeg')";
            }
            else if (todayIcon === 'Clear') {
                hero.style.backgroundImage = "url('./assets/images/sunny.jpeg')";
            }
            else if (todayIcon === 'Snow') {
                hero.style.backgroundImage = "url('./assets/images/snowy.jpeg')";
            }
            else if (todayIcon === 'Rain') {
                hero.style.backgroundImage = "url('./assets/images/rainy.jpg')";
            }
        }

        //Hours 00:00-03:00
        var weather1Hr3 = data.list[0].weather[0].main;
        var Temp1Hr3 = Math.round(data.list[0].main.temp);
        var Hum1Hr3 = data.list[0].main.humidity;
        var Wind1Hr3 = Math.round(data.list[0].wind.speed);

        var weather2Hr3 = data.list[8].weather[0].main;
        var Temp2Hr3 = Math.round(data.list[8].main.temp);
        var Hum2Hr3 = data.list[8].main.humidity;
        var Wind2Hr3 = Math.round(data.list[8].wind.speed);

        var weather3Hr3 = data.list[16].weather[0].main;
        var Temp3Hr3 = Math.round(data.list[16].main.temp);
        var Hum3Hr3 = data.list[16].main.humidity;
        var Wind3Hr3 = Math.round(data.list[16].wind.speed);

        var weather4Hr3 = data.list[24].weather[0].main;
        var Temp4Hr3 = Math.round(data.list[24].main.temp);
        var Hum4Hr3 = data.list[24].main.humidity;
        var Wind4Hr3 = Math.round(data.list[24].wind.speed);

        var weather5Hr3 = data.list[32].weather[0].main;
        var Temp5Hr3 = Math.round(data.list[32].main.temp);
        var Hum5Hr3 = data.list[32].main.humidity;
        var Wind5Hr3 = Math.round(data.list[32].wind.speed);

        // Hours 03:00-06:00
        var weather1Hr6 = data.list[1].weather[0].main;
        var Temp1Hr6 = Math.round(data.list[1].main.temp);
        var Hum1Hr6 = data.list[1].main.humidity;
        var Wind1Hr6 = Math.round(data.list[1].wind.speed);

        var weather2Hr6 = data.list[9].weather[0].main;
        var Temp2Hr6 = Math.round(data.list[9].main.temp);
        var Hum2Hr6 = data.list[9].main.humidity;
        var Wind2Hr6 = Math.round(data.list[9].wind.speed);

        var weather3Hr6 = data.list[17].weather[0].main;
        var Temp3Hr6 = Math.round(data.list[17].main.temp);
        var Hum3Hr6 = data.list[17].main.humidity;
        var Wind3Hr6 = Math.round(data.list[17].wind.speed);

        var weather4Hr6 = data.list[25].weather[0].main;
        var Temp4Hr6 = Math.round(data.list[25].main.temp);
        var Hum4Hr6 = data.list[25].main.humidity;
        var Wind4Hr6 = Math.round(data.list[25].wind.speed);

        var weather5Hr6 = data.list[33].weather[0].main;
        var Temp5Hr6 = Math.round(data.list[33].main.temp);
        var Hum5Hr6 = data.list[33].main.humidity;
        var Wind5Hr6 = Math.round(data.list[33].wind.speed);

        // Hours 06:00-09:00
        var weather1Hr9 = data.list[2].weather[0].main;
        var Temp1Hr9 = Math.round(data.list[2].main.temp);
        var Hum1Hr9 = data.list[2].main.humidity;
        var Wind1Hr9 = Math.round(data.list[2].wind.speed);

        var weather2Hr9 = data.list[10].weather[0].main;
        var Temp2Hr9 = Math.round(data.list[10].main.temp);
        var Hum2Hr9 = data.list[10].main.humidity;
        var Wind2Hr9 = Math.round(data.list[10].wind.speed);

        var weather3Hr9 = data.list[18].weather[0].main;
        var Temp3Hr9 = Math.round(data.list[18].main.temp);
        var Hum3Hr9 = data.list[18].main.humidity;
        var Wind3Hr9 = Math.round(data.list[18].wind.speed);

        var weather4Hr9 = data.list[26].weather[0].main;
        var Temp4Hr9 = Math.round(data.list[26].main.temp);
        var Hum4Hr9 = data.list[26].main.humidity;
        var Wind4Hr9 = Math.round(data.list[26].wind.speed);

        var weather5Hr9 = data.list[34].weather[0].main;
        var Temp5Hr9 = Math.round(data.list[34].main.temp);
        var Hum5Hr9 = data.list[34].main.humidity;
        var Wind5Hr9 = Math.round(data.list[34].wind.speed);

        // Hours 09:00-12:00
        var weather1Hr12 = data.list[3].weather[0].main;
        var Temp1Hr12 = Math.round(data.list[3].main.temp);
        var Hum1Hr12 = data.list[3].main.humidity;
        var Wind1Hr12 = Math.round(data.list[3].wind.speed);

        var weather2Hr12 = data.list[11].weather[0].main;
        var Temp2Hr12 = Math.round(data.list[11].main.temp);
        var Hum2Hr12 = data.list[11].main.humidity;
        var Wind2Hr12 = Math.round(data.list[11].wind.speed);

        var weather3Hr12 = data.list[19].weather[0].main;
        var Temp3Hr12 = Math.round(data.list[19].main.temp);
        var Hum3Hr12 = data.list[19].main.humidity;
        var Wind3Hr12 = Math.round(data.list[19].wind.speed);

        var weather4Hr12 = data.list[27].weather[0].main;
        var Temp4Hr12 = Math.round(data.list[27].main.temp);
        var Hum4Hr12 = data.list[27].main.humidity;
        var Wind4Hr12 = Math.round(data.list[27].wind.speed);

        var weather5Hr12 = data.list[35].weather[0].main;
        var Temp5Hr12 = Math.round(data.list[35].main.temp);
        var Hum5Hr12 = data.list[35].main.humidity;
        var Wind5Hr12 = Math.round(data.list[35].wind.speed);

        // Hours 12:00-15:00
        var weather1Hr15 = data.list[4].weather[0].main;
        var Temp1Hr15 = Math.round(data.list[4].main.temp);
        var Hum1Hr15 = data.list[4].main.humidity;
        var Wind1Hr15 = Math.round(data.list[4].wind.speed);

        var weather2Hr15 = data.list[12].weather[0].main;
        var Temp2Hr15 = Math.round(data.list[12].main.temp);
        var Hum2Hr15 = data.list[12].main.humidity;
        var Wind2Hr15 = Math.round(data.list[12].wind.speed);

        var weather3Hr15 = data.list[20].weather[0].main;
        var Temp3Hr15 = Math.round(data.list[20].main.temp);
        var Hum3Hr15 = data.list[20].main.humidity;
        var Wind3Hr15 = Math.round(data.list[20].wind.speed);

        var weather4Hr15 = data.list[28].weather[0].main;
        var Temp4Hr15 = Math.round(data.list[28].main.temp);
        var Hum4Hr15 = data.list[28].main.humidity;
        var Wind4Hr15 = Math.round(data.list[28].wind.speed);

        var weather5Hr15 = data.list[36].weather[0].main;
        var Temp5Hr15 = Math.round(data.list[36].main.temp);
        var Hum5Hr15 = data.list[36].main.humidity;
        var Wind5Hr15 = Math.round(data.list[36].wind.speed);

        // Hours 15:00-18:00
        var weather1Hr18 = data.list[5].weather[0].main;
        var Temp1Hr18 = Math.round(data.list[5].main.temp);
        var Hum1Hr18 = data.list[5].main.humidity;
        var Wind1Hr18 = Math.round(data.list[5].wind.speed);

        var weather2Hr18 = data.list[13].weather[0].main;
        var Temp2Hr18 = Math.round(data.list[13].main.temp);
        var Hum2Hr18 = data.list[13].main.humidity;
        var Wind2Hr18 = Math.round(data.list[13].wind.speed);

        var weather3Hr18 = data.list[21].weather[0].main;
        var Temp3Hr18 = Math.round(data.list[21].main.temp);
        var Hum3Hr18 = data.list[21].main.humidity;
        var Wind3Hr18 = Math.round(data.list[21].wind.speed);

        var weather4Hr18 = data.list[29].weather[0].main;
        var Temp4Hr18 = Math.round(data.list[29].main.temp);
        var Hum4Hr18 = data.list[29].main.humidity;
        var Wind4Hr18 = Math.round(data.list[29].wind.speed);

        var weather5Hr18 = data.list[37].weather[0].main;
        var Temp5Hr18 = Math.round(data.list[37].main.temp);
        var Hum5Hr18 = data.list[37].main.humidity;
        var Wind5Hr18 = Math.round(data.list[37].wind.speed);

        //Hours 18:00-24:00
        var weather1Hr24 = data.list[6].weather[0].main;
        var Temp1Hr24 = Math.round(data.list[6].main.temp);
        var Hum1Hr24 = data.list[6].main.humidity;
        var Wind1Hr24 = Math.round(data.list[6].wind.speed);

        var weather2Hr24 = data.list[14].weather[0].main;
        var Temp2Hr24 = Math.round(data.list[14].main.temp);
        var Hum2Hr24 = data.list[14].main.humidity;
        var Wind2Hr24 = Math.round(data.list[14].wind.speed);

        var weather3Hr24 = data.list[22].weather[0].main;
        var Temp3Hr24 = Math.round(data.list[22].main.temp);
        var Hum3Hr24 = data.list[22].main.humidity;
        var Wind3Hr24 = Math.round(data.list[22].wind.speed);

        var weather4Hr24 = data.list[30].weather[0].main;
        var Temp4Hr24 = Math.round(data.list[30].main.temp);
        var Hum4Hr24 = data.list[30].main.humidity;
        var Wind4Hr24 = Math.round(data.list[30].wind.speed);

        var weather5Hr24 = data.list[38].weather[0].main;
        var Temp5Hr24 = Math.round(data.list[38].main.temp);
        var Hum5Hr24 = data.list[38].main.humidity;
        var Wind5Hr24 = Math.round(data.list[38].wind.speed);

        // WEATHER TABS UPDATED
        if (time < 3) {
            weather1.innerText = weather1Hr3;
            day_icon(weather1Hr3, icon_day_1, Wind1Hr3);
            temp1.innerText = Temp1Hr3 + 'F';
            hum1.innerHTML = Hum1Hr3 + '%';
            wind1.innerText = Wind1Hr3 + 'mph';

            weather2.innerText = weather2Hr3;
            day_icon(weather2Hr3, icon_day_2, Wind2Hr3);
            temp2.innerText = Temp2Hr3 + 'F';
            hum2.innerHTML = Hum2Hr3 + '%';
            wind2.innerText = Wind2Hr3 + 'mph';

            weather3.innerText = weather3Hr3;
            day_icon(weather3Hr3, icon_day_3, Wind3Hr3);
            temp3.innerText = Temp3Hr3 + 'F';
            hum3.innerHTML = Hum3Hr3 + '%';
            wind3.innerText = Wind3Hr3 + 'mph';

            weather4.innerText = weather4Hr3;
            day_icon(weather4Hr3, icon_day_4, Wind4Hr3);
            temp4.innerText = Temp4Hr3 + 'F';
            hum4.innerHTML = Hum4Hr3 + '%';
            wind4.innerText = Wind4Hr3 + 'mph';

            weather5.innerText = weather5Hr3;
            day_icon(weather5Hr3, icon_day_5, Wind5Hr3);
            temp5.innerText = Temp5Hr3 + 'F';
            hum5.innerHTML = Hum5Hr3 + '%';
            wind5.innerText = Wind5Hr3 + 'mph';
        }
        if (time < 6) {
            weather1.innerText = weather1Hr6;
            day_icon(weather1Hr6, icon_day_1, Wind1Hr6);
            temp1.innerText = Temp1Hr6 + 'F';
            hum1.innerHTML = Hum1Hr6 + '%';
            wind1.innerText = Wind1Hr6 + 'mph';

            weather2.innerText = weather2Hr6;
            day_icon(weather2Hr6, icon_day_2, Wind2Hr6);
            temp2.innerText = Temp2Hr6 + 'F';
            hum2.innerHTML = Hum2Hr6 + '%';
            wind2.innerText = Wind2Hr6 + 'mph';

            weather3.innerText = weather3Hr6;
            day_icon(weather3Hr6, icon_day_3, Wind3Hr6);
            temp3.innerText = Temp3Hr6 + 'F';
            hum3.innerHTML = Hum3Hr6 + '%';
            wind3.innerText = Wind3Hr6 + 'mph';

            weather4.innerText = weather4Hr6;
            day_icon(weather4Hr6, icon_day_4, Wind4Hr6);
            temp4.innerText = Temp4Hr6 + 'F';
            hum4.innerHTML = Hum4Hr6 + '%';
            wind4.innerText = Wind4Hr6 + 'mph';

            weather5.innerText = weather5Hr6;
            day_icon(weather5Hr6, icon_day_5, Wind5Hr6);
            temp5.innerText = Temp5Hr6 + 'F';
            hum5.innerHTML = Hum5Hr6 + '%';
            wind5.innerText = Wind5Hr6 + 'mph';
        }
        if (time < 9) {
            weather1.innerText = weather1Hr9;
            day_icon(weather1Hr9, icon_day_1, Wind1Hr9);
            temp1.innerText = Temp1Hr9 + 'F';
            hum1.innerHTML = Hum1Hr9 + '%';
            wind1.innerText = Wind1Hr9 + 'mph';

            weather2.innerText = weather2Hr9;
            day_icon(weather2Hr9, icon_day_2, Wind2Hr9);
            temp2.innerText = Temp2Hr9 + 'F';
            hum2.innerHTML = Hum2Hr9 + '%';
            wind2.innerText = Wind2Hr9 + 'mph';

            weather3.innerText = weather3Hr9;
            day_icon(weather3Hr9, icon_day_3, Wind3Hr9);
            temp3.innerText = Temp3Hr9 + 'F';
            hum3.innerHTML = Hum3Hr9 + '%';
            wind3.innerText = Wind3Hr9 + 'mph';

            weather4.innerText = weather4Hr9;
            day_icon(weather4Hr9, icon_day_4, Wind4Hr9);
            temp4.innerText = Temp4Hr9 + 'F';
            hum4.innerHTML = Hum4Hr9 + '%';
            wind4.innerText = Wind4Hr9 + 'mph';

            weather5.innerText = weather5Hr9;
            day_icon(weather5Hr9, icon_day_5, Wind5Hr9);
            temp5.innerText = Temp5Hr9 + 'F';
            hum5.innerHTML = Hum5Hr9 + '%';
            wind5.innerText = Wind5Hr9 + 'mph';
        }
        if (time < 12) {
            weather1.innerText = weather1Hr12;
            day_icon(weather1Hr12, icon_day_1, Wind1Hr12);
            temp1.innerText = Temp1Hr12 + 'F';
            hum1.innerHTML = Hum1Hr12 + '%';
            wind1.innerText = Wind1Hr12 + 'mph';

            weather2.innerText = weather2Hr12;
            day_icon(weather2Hr12, icon_day_2, Wind2Hr12);
            temp2.innerText = Temp2Hr12 + 'F';
            hum2.innerHTML = Hum2Hr12 + '%';
            wind2.innerText = Wind2Hr12 + 'mph';

            weather3.innerText = weather3Hr12;
            day_icon(weather3Hr12, icon_day_3, Wind3Hr12);
            temp3.innerText = Temp3Hr12 + 'F';
            hum3.innerHTML = Hum3Hr12 + '%';
            wind3.innerText = Wind3Hr12 + 'mph';

            weather4.innerText = weather4Hr12;
            day_icon(weather4Hr12, icon_day_4, Wind4Hr12);
            temp4.innerText = Temp4Hr12 + 'F';
            hum4.innerHTML = Hum4Hr12 + '%';
            wind4.innerText = Wind4Hr12 + 'mph';

            weather5.innerText = weather5Hr12;
            day_icon(weather5Hr12, icon_day_5, Wind5Hr12);
            temp5.innerText = Temp5Hr12 + 'F';
            hum5.innerHTML = Hum5Hr12 + '%';
            wind5.innerText = Wind5Hr12 + 'mph';
        }
        if (time < 15) {
            weather1.innerText = weather1Hr15;
            day_icon(weather1Hr15, icon_day_1, Wind1Hr15);
            temp1.innerText = Temp1Hr15 + 'F';
            hum1.innerHTML = Hum1Hr15 + '%';
            wind1.innerText = Wind1Hr15 + 'mph';

            weather2.innerText = weather2Hr15;
            day_icon(weather2Hr15, icon_day_2, Wind2Hr15);
            temp2.innerText = Temp2Hr15 + 'F';
            hum2.innerHTML = Hum2Hr15 + '%';
            wind2.innerText = Wind2Hr15 + 'mph';

            weather3.innerText = weather3Hr15;
            day_icon(weather3Hr15, icon_day_3, Wind3Hr15);
            temp3.innerText = Temp3Hr15 + 'F';
            hum3.innerHTML = Hum3Hr15 + '%';
            wind3.innerText = Wind3Hr15 + 'mph';

            weather4.innerText = weather4Hr15;
            day_icon(weather4Hr15, icon_day_4, Wind4Hr15);
            temp4.innerText = Temp4Hr15 + 'F';
            hum4.innerHTML = Hum4Hr15 + '%';
            wind4.innerText = Wind4Hr15 + 'mph';

            weather5.innerText = weather5Hr15;
            day_icon(weather5Hr15, icon_day_5, Wind5Hr15);
            temp5.innerText = Temp5Hr15 + 'F';
            hum5.innerHTML = Hum5Hr15 + '%';
            wind5.innerText = Wind5Hr15 + 'mph';
        }
        if (time < 18) {
            weather1.innerText = weather1Hr18;
            day_icon(weather1Hr18, icon_day_1, Wind1Hr18);
            temp1.innerText = Temp1Hr18 + 'F';
            hum1.innerHTML = Hum1Hr18 + '%';
            wind1.innerText = Wind1Hr18 + 'mph';

            weather2.innerText = weather2Hr18;
            day_icon(weather2Hr18, icon_day_2, Wind2Hr18);
            temp2.innerText = Temp2Hr18 + 'F';
            hum2.innerHTML = Hum2Hr18 + '%';
            wind2.innerText = Wind2Hr18 + 'mph';

            weather3.innerText = weather3Hr18;
            day_icon(weather3Hr18, icon_day_3, Wind3Hr18);
            temp3.innerText = Temp3Hr18 + 'F';
            hum3.innerHTML = Hum3Hr18 + '%';
            wind3.innerText = Wind3Hr18 + 'mph';

            weather4.innerText = weather4Hr18;
            day_icon(weather4Hr18, icon_day_4, Wind4Hr18);
            temp4.innerText = Temp4Hr18 + 'F';
            hum4.innerHTML = Hum4Hr18 + '%';
            wind4.innerText = Wind4Hr18 + 'mph';

            weather5.innerText = weather5Hr18;
            day_icon(weather5Hr18, icon_day_5, Wind5Hr18);
            temp5.innerText = Temp5Hr18 + 'F';
            hum5.innerHTML = Hum5Hr18 + '%';
            wind5.innerText = Wind5Hr18 + 'mph';
        }
        if (time < 24) {
            weather1.innerText = weather1Hr24;
            day_icon(weather1Hr24, icon_day_1, Wind1Hr24);
            temp1.innerText = Temp1Hr24 + 'F';
            hum1.innerHTML = Hum1Hr24 + '%';
            wind1.innerText = Wind1Hr24 + 'mph';

            weather2.innerText = weather2Hr24;
            day_icon(weather2Hr24, icon_day_2, Wind2Hr24);
            temp2.innerText = Temp2Hr24 + 'F';
            hum2.innerHTML = Hum2Hr24 + '%';
            wind2.innerText = Wind2Hr24 + 'mph';

            weather3.innerText = weather3Hr24;
            day_icon(weather3Hr24, icon_day_3, Wind3Hr24);
            temp3.innerText = Temp3Hr24 + 'F';
            hum3.innerHTML = Hum3Hr24 + '%';
            wind3.innerText = Wind3Hr24 + 'mph';

            weather4.innerText = weather4Hr24;
            day_icon(weather4Hr24, icon_day_4, Wind4Hr24);
            temp4.innerText = Temp4Hr24 + 'F';
            hum4.innerHTML = Hum4Hr24 + '%';
            wind4.innerText = Wind4Hr24 + 'mph';

            weather5.innerText = weather5Hr24;
            day_icon(weather5Hr24, icon_day_5, Wind5Hr24);
            temp5.innerText = Temp5Hr24 + 'F';
            hum5.innerHTML = Hum5Hr24 + '%';
            wind5.innerText = Wind5Hr24 + 'mph';
        }
    } catch (error){
        alert('City Not Found!');
        throw new Error('Failed to fetch data');
    }
}

function validateInput() {
    var check = 0;
    if (searchBox.value.trim() === "") {
        alert("Please add a city name!");
        return false;
    }
    else {
        check++;
    }
    if (searchBoxSC.value.trim() === "") {
        alert("For most accurate results, please add state name or code!");
    }
    else {
        check++;
    }
    if (searchBoxCC.value.trim() === "") {
        alert("For most accurate results, please add a country name or code!");
    }
    else {
        check++;
    }
}

// search history
function search() {
    if (searchBox.value.trim() !== '') {
        var searchTerm = searchBox.value + ',' + searchBoxSC.value + ',' + searchBoxCC.value;
        // Add the search term to the search history array
        searchHistory.unshift(searchTerm);

        // Limit the search history to 5 items
        if (searchHistory.length > 5) {
            searchHistory.pop();
        }

        renderSearchHistory();
        // setTimeout();
    }

    // // NEW
    saveSearchHistory();
}

function initSearch(searchTerm) {
    if (searchTerm) {
        var terms = searchTerm.split(',');
        checkWeather(terms[0], terms[1], terms[2]);
    }
}

function renderSearchHistory() {
    var searchHistoryElement = document.getElementById('searchHistory');
    // Clear existing search history list
    searchHistoryElement.innerHTML = '';

    // Loop through the search history array and create list items for each search term
    for (var i = 0; i < searchHistory.length; i++) {
        const historyBtn = document.createElement('button');
        historyBtn.classList.add('recent_search');
        historyBtn.textContent = searchHistory[i];
        historyBtn.addEventListener('click', () => {
            initSearch(historyBtn.textContent);
        });
        searchHistoryElement.appendChild(historyBtn);
    }
}

function saveSearchHistory() {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

function loadSearchHistory() {
    var storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
        searchHistory = JSON.parse(storedHistory);
        renderSearchHistory();
    }
}

window.onload = function () {
    loadSearchHistory();
    loadSavedCities();
}

searchBtn.addEventListener("click", () => {
    var goodToRun = validateInput();
    if (goodToRun === false) {
        return;
    }
    else {
        checkWeather(searchBox.value, searchBoxSC.value, searchBoxCC.value);
        search();
    }
});

// saveSearch
function saveSearch() {
    if (searchBox.value.trim() !== '') {
        var saveTerm = searchBox.value + ',' + searchBoxSC.value + ',' + searchBoxCC.value;
        savedHistory.unshift(saveTerm);

        // Limit the search history to 5 items
        if (savedHistory.length > 5) {
            savedHistory.pop();
        }
        renderSavedHistory();
    }
    saveLovedHistory();
}

function initSave(searchTerm) {
    if (searchTerm) {
        var saveTerms = searchTerm.split(',');
        checkWeather(saveTerms[0], saveTerms[1], saveTerms[2]);
    }
}

function renderSavedHistory() {
    var savedHistoryElement = document.getElementById('loved-cities');
    // Clear existing search history list
    savedHistoryElement.innerHTML = '';

    // Loop through the search history array and create list items for each search term
    for (var k = 0; k < savedHistory.length; k++) {
        const savedCityBtn = document.createElement('button');
        savedCityBtn.classList.add('loved-btn');
        savedCityBtn.textContent = savedHistory[k];
        savedCityBtn.addEventListener('click', () => {
            initSave(savedCityBtn.textContent);
        });
        savedHistoryElement.appendChild(savedCityBtn);
    }
}

function saveLovedHistory() {
    localStorage.setItem('savedHistory', JSON.stringify(savedHistory));
}

function loadSavedCities() {
    var storedCities = localStorage.getItem('savedHistory');
    if (storedCities) {
        savedHistory = JSON.parse(storedCities);
        renderSavedHistory();
    }
}

saveBtn.addEventListener("click", () => {
    var goodToGo = validateInput();
    if (goodToGo === false) {
        return;
    }
    else {
        checkWeather(searchBox.value, searchBoxSC.value, searchBoxCC.value);
        saveSearch();
        search();
    }
});


