import { helper } from '@ember/component/helper';

function notEq(params) {
  return params[0] !== params[1];
}

export default helper(notEq);
