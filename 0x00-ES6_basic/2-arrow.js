function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = false;
    var task2 = true;
  }

  return [task, task2];
}

console.log(taskBlock(true));
console.log(taskBlock(false));
