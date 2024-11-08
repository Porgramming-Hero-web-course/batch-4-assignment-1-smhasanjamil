const getProperty = <T, U extends keyof T>(obj: T, key: U): T[U] => {
  return obj[key];
};

const person = { name: "Hasan", age: 26 };
getProperty(person, "name");
