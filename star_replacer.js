var replace = require("replace")

var stars = require('./behind_the_stars.json')

for (var key in stars) {
	string_to_change = "{{3}" + key + "}{3}"
	replace ({
		regex: string_to_change, 
		replacement: stars[key], 
		paths: ["test.xml"],
	})
}