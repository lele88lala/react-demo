import _ from 'lodash';

require('./styles/main.scss');

function component() {
  console.log('debug');
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.innerHTML = "Hello webpack";
  return element;
}

document.body.appendChild(component());
