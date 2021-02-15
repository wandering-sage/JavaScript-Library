// No arguments                 :- random b/w [0,1)
// Single Numerical argument    :- random b/w [0,x)
// Two Numerical arguments      :- random b/w [x,y)
// Single Array argument        :- random value from that array
function random(min, max) {
	var rand = Math.random();
	
	if (typeof max === "undefined") {
        // No argument case
		if (typeof min === "undefined") {
			return rand;
		}

		// argument is an Array
		if (min instanceof Array) {
			return min[Math.floor(rand * min.length)];
		}
	}

	if (typeof min == "number") {
		// Single Numerical
		if (typeof max === "undefined") {
			return rand * min;
		}
		// both numbers
		if (typeof max == "number") {
			if (min > max) {
				var tmp = min;
				min = max;
				max = tmp;
			}
			return rand * (max - min) + min;
		}
	}

    throw "Invalid arguments";
}
