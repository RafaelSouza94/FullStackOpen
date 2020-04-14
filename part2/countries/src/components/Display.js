import React from 'react'

const PrintCountry = ({country}) => {
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
		</div>)
}

const Display = ({countries}) => {

	if(countries.length > 10){
		return(
			<p>Too many matches! Filter more your search</p>
		)
	}

	if(countries.length > 1){
		return (
			<div>
			     {countries.map(country =>
		    		<p key={country.name}><b>Name:</b> {country.name}</p>)}
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