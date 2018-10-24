import { deprecate } from 'core-decorators';

class Person {
    @deprecate
    facepalm() {}

    @deprecate('We stopped facepalming')
    facepalmHard() {}

    @deprecate('We stopped facepalming', { url: 'http://knowyourname.com/memes/facepalm'})
    facepalmHarder() {}
}

let person = new Person();
person.facepalm();
//deprecate.js:31 DEPRECATION Person#facepalm: This function will be removed in future versions.
person.facepalmHard();
//deprecate.js:31 DEPRECATION Person#facepalmHard: We stopped facepalming
person.facepalmHarder();
//deprecate.js:31 DEPRECATION Person#facepalmHarder: We stopped facepalming

// See http://knowyourname.com/memes/facepalm for more details.