function addAndRemoveElements(arr) {
  let initNumber = 0;
  let newArr = [];

  for (const command of arr) {
    initNumber++;
    if (command == 'add') {
      newArr.push(initNumber);
    } else {
      newArr.pop(initNumber);
    }
  }

  let result = newArr.length ? newArr.join('\n') : 'Empty';
  console.log(result);
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);
