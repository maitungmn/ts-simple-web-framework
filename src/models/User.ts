import { Collection } from './Collection';
import { Attributes } from './Attributes';
import { Model } from './Model';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      'http://locahost:3000/users',
      (json: UserProps) => User.buildUser(json)
    );
  }
}
