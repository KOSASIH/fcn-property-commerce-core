import axios from 'axios';
import { initializeWebServer } from '../utils/helpers';
import { userService } from '../services/userService';

describe('User Integration Tests', () => {
  let axiosAPIClient;
  let expressApp;
  let connection;

  beforeAll(async () => {
    expressApp = await initializeWebServer();
    const axiosConfig = {
      baseURL: `http://127.0.0.1:${expressApp.port}`,
      validateStatus: () => true,
    };
    axiosAPIClient = axios.create(axiosConfig);
  });

  afterAll(async () => {
    await stopWebServer();
  });

  test('When asked for an existing user, Then should retrieve it and receive 200 response', async () => {
    const userToAdd = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password123',
    };

    // Use axios to create a user
    const {
      data: { id: addedUserId },
    } = await axiosAPIClient.post(`/user`, userToAdd);

    // Use axios to retrieve the same user by id
    const getResponse = await axiosAPIClient.get(`/user/${addedUserId}`);
    expect(getResponse.status).toBe(200);
    expect(getResponse.data.name).toBe('John Doe');
    expect(getResponse.data.email).toBe('johndoe@example.com');
  });

  test('When asked for a non-existing user, Then should receive 404 response', async () => {
    const nonExistingUserId = 999;
    const getResponse = await axiosAPIClient.get(`/user/${nonExistingUserId}`);
    expect(getResponse.status).toBe(404);
  });
});
