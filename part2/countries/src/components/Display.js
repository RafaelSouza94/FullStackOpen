import React from 'react'

const PrintName = ({name}) => {
	return(<p><b>Name:</b> {name}</p>)
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
		    		<PrintName key={country.name} name={country.name} />)}
			</div>
		)
	}

	if(countries.length === 1){
		return (
			<div>
			     {countries.map(country =>
		    		<PrintName key={country.name} name={country.name} />)}
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