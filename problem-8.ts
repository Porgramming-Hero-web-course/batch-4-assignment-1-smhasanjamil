const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
  for (let key of keys) {
    if (!(key in obj)) {
      return false;
    }
  }
  return true;
};

const person = { name: "Hasan", age: 26, email: "hasan@gmail.com" };
validateKeys(person, ["name", "age"]);
