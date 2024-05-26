import { Property } from '../models/property';
import { userService } from '../services/userService';

describe('Property Model', () => {
  it('should create a new property', async () => {
    const user = await userService.getCurrentUser();
    const property = new Property({
      title: 'Test Property',
      description: 'This is a test property',
      price: 1000000,
      location: 'Jakarta, Indonesia',
      userId: user.id,
    });
    expect(property.title).toBe('Test Property');
    expect(property.description).toBe('This is a test property');
    expect(property.price).toBe(1000000);
    expect(property.location).toBe('Jakarta, Indonesia');
    expect(property.userId).toBe(user.id);
  });

  it('should throw an error if title is not provided', async () => {
    expect(() => new Property({})).toThrowError('Title is required');
  });

  it('should throw an error if price is not a number', async () => {
    expect(() => new Property({ title: 'Test Property', price: 'not a number' })).toThrowError('Price must be a number');
  });
});
