let names= ["arda","kerem","aslı","mert"];
let years=[1990,1980,2000,2005]
let mix=["arda","yilmaz",1990,null,undefined,["programlama","futbol"]]

console.log(names)
console.log(names.lenght);
console.log(typeof names);

console.log(years);
console.log(mix);
console.log(names[3])
names[0]="levent";
names[names.length]="mehmet"
console.log(names);

names.push("Eda");
console.log(names);

names.unshift("Eda");
console.log(names);

years.pop();
console.log(years);
years.shift();
console.log(years);