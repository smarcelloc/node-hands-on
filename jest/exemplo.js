// exports.exemplo01 = (n) => {
//     return (n * 2)
// }

// exports.exemplo02 = (n) => n *2;

module.exports = {
  exemplo01: (n) => n * 2,
  exemplo02: (n, callback) => callback(n) + n
}
