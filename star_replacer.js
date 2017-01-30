var replace = require("replace")
var copyFile = require("quickly-copy-file")

var stars = require('./behind_the_stars.json')

file_with_stars = "recipe_nopw.xml"
file_with_secrets = "recipe.xml"

function makeReplacements(stars){
	for (var key in stars) {
		string_to_change = "{{3}" + key + "}{3}"
		replace ({
			regex: string_to_change, 
			replacement: stars[key], 
			paths: [file_with_secrets],
		})
	}
}

copyFile(file_with_stars, file_with_secrets)
	.then(() => makeReplacements(stars))
	.catch(function(error) { console.error(error);});

