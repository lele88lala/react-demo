function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
 // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  console.log('2')
  element.innerHTML = "Hello webpack";
  return element;
}

document.body.appendChild(component());
