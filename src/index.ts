import { User } from './models/User';

const user = new User({ name: 'New Name', age: 30 });

user.on('change', () => {
  console.log('user was changed');
});
