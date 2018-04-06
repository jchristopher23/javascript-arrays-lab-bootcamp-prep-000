const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}
<<<<<<< HEAD
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function appendKitten(name){
  return [...kittens, name];
}
function prependKitten(name){
  return [name, ...kittens]
}
function removeLastKitten(){
 return kittens.slice(0, -1)
}
function removeFirstKitten(){
  return kittens.slice(1)
}
=======
function.
>>>>>>> 2536a40d00ee3aa8c262c9ba1919c1f899462ca7
