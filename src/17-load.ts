import _ from 'lodash';

const data = [
  {
    username: 'samu',
    role: 'admin'
  },
  {
    username: 'val',
    role: 'seller'
  },
  {
    username: 'zul',
    role: 'seller'
  },
  {
    username: 'santi',
    role: 'customer'
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
