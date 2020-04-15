import React, { useState, useEffect } from 'react'
import axios from 'axios'

const weather_api_key = process.env.REACT_APP_WEATHERSTACK_API_KEY
const weather_url = `http://api.weatherstack.com/current?access_key=${weather_api_key}&query=`

const PrintCountry = ({country}) => {
	console.log("Reached PrintCountry with ", country)
	const [weather_temperature, setTemperature] = useState('')
	const [wind_speed, setWindSpeed] = useState('')
	const [weather_icon, setWeatherIcon] = useState('')
	const [wind_direction, setWindDirection] = useState('')

	const hook = () => {
		axios
			.get(weather_url.concat(country.name))
			.then(response => {
				console.log(response.data)
				setTemperature(response.data['current'].temperature)
				setWindSpeed(response.data['current'].wind_speed)
				setWeatherIcon(response.data['current'].weather_icons[0])
				setWindDirection(response.data['current'].wind_dir)})
	}

	useEffect(hook, [])

	return(
		<div>
			<p><b>Name:</b> {country.name}</p>
			<p><b>Capital:</b> {country.capital}</p>
			<p><b>Population:</b> {country.population}</p>
			<p><b>Languages:</b></p>
			<ul>
				{country.languages.map(lang =>
					<li key={lang.name}>{lang.name}</li>)}
			</ul>
			<img alt="{country.name} flag"  src={country.flag} height='300' width='450' />
			<p><b>Weather in {country.capital}:</b></p>
			<p><b>Temperature:</b> {weather_temperature} ºC</p>
			<img alt="temperature icon" src={weather_icon} />
			<p><b>Wind:</b> {wind_speed} MPH in direction {wind_direction}</p>

		</div>)
}

const Display = ({countries}) => {
	const [country, setCountry] = useState('')


	if(countries.length > 10){
		return(
			<p>Too many matches! Filter more your search.</p>
		)
	}

	if(countries.length > 1){
		const handleShowCountry = (country) => {
			console.log("Clicked with ", country)
			setCountry(country)
			return (
				<PrintCountry key={country.name} country={country} />
			)
		}

		return (
			<div>
			     {countries.map(country =>
			     	<div key={country.name}>
		    			<p><b>Name:</b> {country.name}</p>
    					<button onClick={() => handleShowCountry(country)}>Show</button>
					</div>)}
			</div>
		)
	}

	if(countries.length === 1){
		return (
			<div>
		    	{countries.map(country =>
    				<PrintCountry key={country.name} country={country} />
	    		)}
			</div>
		) 
	}

	if(countries.length === 0){
		return(
			<p>Nothing found!</p>
		)
	}
}

export default Display