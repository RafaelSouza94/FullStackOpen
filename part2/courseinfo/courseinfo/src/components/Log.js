

const logging = true

let logTypes = {
	EXECUTION: 'Exec'
}

function log(logTypes.EXECUTION, type) {
	if ((type === "execution") && (logging))
		console.log("Executing " + message + " component");
}
