containsNumber = (string) => {
  let regex = /regex/;
  let found = string.match(regex);
  if (string.match(/\d+/)) {
    return true;
  }
  else{
  return false;
}
};

containsRepeatingLetter = (string) => {
  let regex = /([a-zA-Z]).*?\1/;
  let found = string.match(regex)

  if (found === null) {
    return false;
  } else {
    return true;
  }
};

endsWithVowel = (string) => {
  let regex = /[aeiouAEIOU]$/;
  let found = string.match(regex);

  if (found === null) {
    return false;
  } else {
    return true;
  }


};

captureThreeNumbers = (string) => {
  let found = string.match(/\d{3}/);
  if (found == null){
    return false;
  }
  else {
    return found[0];
  }
};

matchesPattern = (string) => {
  let pattern = /^\d{3}-\d{3}-\d{4}$/;
  if (pattern.test(string)) {
    return true;
  } else {
    return false;
  }
};

isUSD = (string) => {

  let usd = /^\$(\d+)(([,]?(\d{3}))*)?(\.\d{2})?$/;

  if (usd.test(string)) {
    return true;
  } else {
    return false;
  }

};
