import { User } from '../models/user';
import { userService } from '../services/userService';

describe('User Model', () => {
  it('should create a new user', async () => {
    const user = new User({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password123',
    });
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('johndoe@example.com');
    expect(user.password).toBe('password123');
  });

  it('should throw an error if email is not provided', async () => {
    expect(() => new User({})).toThrowError('Email is required');
  });

  it('should throw an error if password is not provided', async () => {
    expect(() => new User({ email: 'johndoe@example.com' })).toThrowError('Password is required');
  });
});
