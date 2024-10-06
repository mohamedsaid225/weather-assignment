// api key : 3ededb904fd94623a26143013240210       

async function getWeather(city) {
    var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3ededb904fd94623a26143013240210&q=${city}&days=3`);

    if (response.ok === true && response.status === 200) {
        var data = await response.json();
        display(data);
    }
}

var searchInput = document.querySelector("#search");
searchInput.addEventListener("input", function () {
    getWeather(this.value);
});
var submitbtn= document.querySelector('#submit');
submitbtn.addEventListener('click', function(){
    getWeather(searchInput.value)
} )

var daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
var monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

// var data = [];

function display(data) {

    function getDateName(dateNum) {
        var dateText = new Date(dateNum).getDay();
        var dateName = daysArray[dateText];
        return dateName;
    }

    function getDateAndMonth(dateNum) {
        var dayNum = new Date(dateNum).getDate();
        var monthText = new Date(dateNum).getMonth();
        var monthName = monthsArray[monthText];
        return dayNum + " " + monthName;
    }

    var box =  `  <div class="col-md-4 p-0 m-0 weather-day">
                        <div class="card-header d-flex justify-content-between text-center">
                            <div class="day">${getDateName(data.forecast.forecastday[0].date)}</div>
                            <div class="date">${getDateAndMonth(data.forecast.forecastday[0].date)}</div>
                        </div>
                        <div class="card-body text-start px-4 py-3">
                            <div class="city">${data.location.name}</div>
                            <div class="degree py-2">
                                <div class="num">
                                ${data.current.temp_c}&deg;C
                                </div>
                                <div class="icon-weatherState">
                                   <img src="https:${data.current.condition.icon}" alt="icon" class="w-50" />
                                </div>
                            </div>
                            <div class="state">
                            ${data.current.condition.text}
                            </div>
                            <div class="pt-3 icon-footer">
                                <span class="pe-2"><i class="fa-solid fa-umbrella"></i> ${data.current.feelslike_c}%</span>
                                <span class="pe-2"><i class="fa-solid fa-wind"></i> ${data.current.wind_kph}km/h</span>
                                <span><i class="fa-solid fa-compass"></i> ${data.current.wind_dir}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 p-0 weather-tomorrow text-center">
                        <div class="card-header">
                            <div class="day">${getDateName(
                                data.forecast.forecastday[1].date
                            )}</div>
                        </div>
                        <div class="card-body px-4">
                            <div class="degree">
                                <div class="icon-weatherState">
                                     <img src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="icon" class="w-25 mt-5" />
                                </div>
                                <div class="num d-flex flex-column" style="font-size: 26px;">
                                    <div>
                                        ${data.forecast.forecastday[1].day.maxtemp_c}&deg;C
                                    </div>
                                    <div style="font-weight: 400; color: #bfc1c8; font-size: 20px;">${data.forecast.forecastday[1].day.mintemp_c}&deg;</div>
    
    
                                </div>
    
                            </div>
                            <div class="state mt-4">
                            ${data.forecast.forecastday[1].day.condition.text}
                            </div>
    
    
    
    
                        </div>
                    </div>
                    <div class="col-md-4 p-0 weather-afterTomorrow text-center">
                        <div class="card-header">
                            <div class="day">${getDateName(data.forecast.forecastday[2].date)}</div>
                        </div>
                        <div class="card-body px-4">
                            <div class="degree">
                                <div class="icon-weatherState">
                                    <img src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="icon" class="w-25 mt-5" />
                                </div>
                                <div class="num d-flex flex-column" style="font-size: 26px;">
                                    <div>
                                        ${data.forecast.forecastday[2].day.maxtemp_c}&deg;C
                                    </div>
                                    <div style="font-weight: 400; color: #bfc1c8; font-size: 20px;">
                                      ${data.forecast.forecastday[2].day.mintemp_c}&deg;
                                    </div>
    
    
                                </div>
    
                            </div>
                            <div class="state mt-4">
                             ${data.forecast.forecastday[2].day.condition.text}
                            </div>
    
    
    
    
                        </div>
                    </div>`;
    document.querySelector(".cards").innerHTML = box;
}




getWeather("cairo");

var success = function (position) {
    console.log(position);
};

var error = function (error) {
    console.log(error);
};

navigator.geolocation.getCurrentPosition(success, error);

