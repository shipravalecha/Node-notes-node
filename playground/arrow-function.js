var square = (x) => {
  return x*x
};

console.log(square(10));

var user = {
  name: 'shipra',
  sayHi: () => {
console.log(`hi ${this.name}`);
  },
  sayHiAlt () {
  	console.log(`hi ${this.name}`);
  	}
};

user.sayHi();
