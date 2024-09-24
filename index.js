let userName = 'John'

function greet(name) {
  return 'Hello ' + name // Concatenació manual
}

console.log(greet(userName))

function unusedFunction() {
  // No és una arrow function
  let unusedVar = 'This is never used'
}

if (userName == 'John') {
  console.log('Hello John')
}
