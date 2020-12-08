// Função normal
console.log('Normal')
function funcNormal (v1, v2) {
  return v1 + v2
}

console.log(funcNormal(10, 20))

// Função currying
console.log('Currying 1')
function func01 (v1) {
  return function (v2) {
    return v1 + v2
  }
}

const func01Var = func01(10)
console.log(func01Var(20))

// Função currying 2
console.log('Currying 2')
function func01a2 (v1) {
  return function (v2) {
    return v1 + v2
  }
}
console.log(func01a2(10)(20))

// Função Arrow currying
console.log('Função Arrow Currying')
const funcArrow = (v1) => (v2) => (v3) => {
  return v1 + v2 + v3
}

console.log(funcArrow(10)(5)(8))

// Função Arrow currying
console.log('Função Arrow Currying 2')
const funcArrow02 = (v1) => (v2) => (v3) => (v1 + v2 + v3)

console.log(funcArrow02(10)(5)(8))
