// function superbowlWin(array) {
//   const win = array.find(function(obj) {
//     obj.result === 'W';
//   })
//   if (win) {
//     return win.year;
//   }
//   return undefined;
// }


// function superbowlWin(array) {
//   const win = array.find(obj => obj.result === 'W');
//   return win ? win.year : undefined;
// }

const superbowlWin = array => {
  const win = array.find(obj => obj.result === 'W');
  return win ? win.year : undefined;
}