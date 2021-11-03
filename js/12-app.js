//
// ---- Setting Up API Account ---- \\
// Create an Account: https://home.openweathermap.org/users/sign_up
// !!!!!!!!!! Make sure to go to emails and verify your account !!!!!!!!!!!!

// Where to access the API: https://openweathermap.org/api

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//   -- API Key

const keyAPI = ``;
const loc = `Nottingham`;

let stringPassIn = `api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${keyAPI}`;

console.log(stringPassIn);

// Get JSON extention for Chrome formatter -- https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en

let search = () => {
	const keyAPI = `8826c10064648be786a4fc5a7a965748`;
	let loc = document.getElementById('locInput').value;
	// console.log(loc);
	let stringPassIn = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${keyAPI}`;
	// console.log(stringPassIn);

	let dataAPI = fetch(stringPassIn) // fetch is called a 'promise'
		.then((res) => res.json())
		.then((dataAPI) => {
			let temp = Math.trunc(dataAPI.main.temp) - 273;
			document.getElementById('results').innerHTML = `<p>temperature <b>${temp} °C</b><br>${dataAPI.weather[0].description}</p>`;
			// console.log(dataAPI);
		})
		.catch((err) => console.log(err));
};

document.getElementById('myBTN').addEventListener('click', search);
