
// before the call
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(menu) {
  console.log(menu);
  for (let key in menu) {
    if (key !== 'title') {
      user[key] *= 2;
    }
  }

  for (let key in menu) {
    console.log(key + ' = ' + menu[key]);
  }
}
