const city = document.getElementById("city");
const type = document.getElementById("type");
const temp = document.getElementById("temp");
const image = document.getElementById("image");
const input = document.getElementById("inp");

const apiKey = "a790199dcc731c702e9b466591705be4";

// async await
// const weatherData = async function (search) {
//   try {
//     const res = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`
//     );
//     console.log(res);
//     const data = await res.json();
//     console.log(data);
//     console.log(data.name);

//     if (data.cod == 400) {
//       alert("Enter Location");
//       img.src = "images/error1.png";
//       city.innerHTML = "";
//       temp.innerHTML = "";
//       type.innerHTML = "";
//     }

//     if (data.cod == 404) {
//       alert("Enter Correct Location");
//       img.src = "images/error2.png";
//       city.innerHTML = search;
//       temp.innerHTML = "";
//       type.innerHTML = "";
//     }

//     city.innerHTML = data.name;
//     temp.innerHTML = Math.floor(data.main.temp) + "°C";
//     type.innerHTML = data.weather[0].main;

//     switch (type.innerHTML) {
//       case "Clouds":
//         img.src = "images/clouds.png";
//         break;

//       case "Clear":
//         img.src = "images/clears.png";
//         break;

//       case "Rain":
//         img.src = "images/rain.png";
//         break;

//       case "Snow":
//         img.src = "images/snow.jpg";
//         break;

//       case "Haze":
//         img.src = "images/haze.png";
//         break;

//       case "Storm":
//         img.src = "images/strom.png";
//         break;

//       default:
//         break;
//     }

//     input.value = "";
//   } catch (err) {
//     console.error(`🔥 ${err}`);
//     // alert("Something went wrong");
//   }
// };

//
// .then .catch
const weatherData = function (search) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`
  )
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.name);

      if (data.cod == 400) {
        alert("Enter Location");
        img.src = "images/error1.png";
        city.innerHTML = "";
        temp.innerHTML = "";
        type.innerHTML = "";
      }

      if (data.cod == 404) {
        alert("Enter Correct Location");
        img.src = "images/error2.png";
        city.innerHTML = search;
        temp.innerHTML = "";
        type.innerHTML = "";
      }

      city.innerHTML = data.name;
      temp.innerHTML = Math.floor(data.main.temp) + "°C";
      type.innerHTML = data.weather[0].main;

      switch (type.innerHTML) {
        case "Clouds":
          img.src = "images/clouds.png";
          break;

        case "Clear":
          img.src = "images/clears.png";
          break;

        case "Rain":
          img.src = "images/rain.png";
          break;

        case "Snow":
          img.src = "images/snow.jpg";
          break;

        case "Haze":
          img.src = "images/haze.png";
          break;

        case "Storm":
          img.src = "images/strom.png";
          break;

        default:
          break;
      }

      input.value = "";
    })
    .catch((err) => {
      console.error(`🔥 ${err}`);
      // alert("Something went wrong");
    });
};

function myFun() {
  const search = input.value;
  weatherData(search);
}
