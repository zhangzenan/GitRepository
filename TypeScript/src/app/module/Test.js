"use strict";
var zip = require("./ZipCodeValidator");
var letters = require("./LettersOnlyValidator");
// Some samples to try
var strings = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new zip.ZipCodeValidator();
validators["Letters only"] = new letters.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(function (s) {
    for (var name_1 in validators) {
        console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
});
//# sourceMappingURL=Test.js.map