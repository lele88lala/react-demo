import _ from 'lodash';

require('./styles/main.scss');

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hellowwwww', 'webpack'], ' ');
  // element.innerHTML = "Hello webpack";
  return element;
}

document.body.appendChild(component());
