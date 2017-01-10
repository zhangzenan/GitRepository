// import { StringValidator } from "./Validation";
// import { ZipCodeValidator } from "./ZipCodeValidator";
// import { LettersOnlyValidator } from "./LettersOnlyValidator";
import validation = require("./Validation");
import zip=require("./ZipCodeValidator");
import letters = require("./LettersOnlyValidator");

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: validation.StringValidator; } = {};
validators["ZIP code"] = new zip.ZipCodeValidator();
validators["Letters only"] = new letters.LettersOnlyValidator();

// Show whether each string passed each validator
strings.forEach(s => {
    for (let name in validators) {
        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
    }
});